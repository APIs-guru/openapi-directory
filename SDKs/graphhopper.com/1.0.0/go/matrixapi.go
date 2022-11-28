package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type MatrixAPI struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMatrixAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MatrixAPI {
	return &MatrixAPI{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CalculateMatrix - Batch Matrix Endpoint
// Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.
//
// The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
//   - Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
//   - Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`
//
// Here are some full examples via curl:
// ```bash
// $ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
// {"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
// ```
//
// Pick the returned `job_id` and use it in the next GET requests:
// ```bash
// $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
// {"status":"waiting"}
// ```
//
// When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
// ```bash
// $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
// {"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
// ```
//
// Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
// ```json
// {"message":"Cannot find from_points: 1"}
// ```
// And the optional `hints` array.
func (s *MatrixAPI) CalculateMatrix(ctx context.Context, request operations.CalculateMatrixRequest) (*operations.CalculateMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/matrix/calculate"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CalculateMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JobID
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JobID = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GhError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GhError = out
		}
	}

	return res, nil
}

// GetMatrix - GET Matrix Endpoint
// With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
// as it works out-of-the-box in the browser. If possible you should
// prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
// and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
func (s *MatrixAPI) GetMatrix(ctx context.Context, request operations.GetMatrixRequest) (*operations.GetMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/matrix"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MatrixResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MatrixResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GhError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GhError = out
		}
	}

	return res, nil
}

// GetMatrixSolution - GET Batch Matrix Endpoint
// This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
func (s *MatrixAPI) GetMatrixSolution(ctx context.Context, request operations.GetMatrixSolutionRequest) (*operations.GetMatrixSolutionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/matrix/solution/{jobId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMatrixSolutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MatrixResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MatrixResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GhError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GhError = out
		}
	}

	return res, nil
}

// PostMatrix - POST Matrix Endpoint
//
// The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
// In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
// Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
// The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
// please refer to the [guide of the GET endpoint](#operation/getMatrix).
//
// **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.
//
// For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
// ```json
// { "points": [[11,10], [22,20]], "vehicle": "car" }
// ```
//
// A complete curl Example:
// ```bash
// curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
// ```
func (s *MatrixAPI) PostMatrix(ctx context.Context, request operations.PostMatrixRequest) (*operations.PostMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/matrix"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MatrixResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MatrixResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GhError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GhError = out
		}
	}

	return res, nil
}
