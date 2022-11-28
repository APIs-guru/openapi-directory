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

type RouteOptimizationAPI struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRouteOptimizationAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *RouteOptimizationAPI {
	return &RouteOptimizationAPI{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AsyncVrp - POST route optimization problem (batch mode)
//
// To solve a vehicle routing problem, perform the following steps:
//
// 1.) Make a HTTP POST to this URL
//
// ```
// https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
// ```
//
// It returns a job id (job_id).
//
// 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
//
// ```
// https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
// ```
//
// We recommend to query the solution every 500ms until it returns 'status=finished'.
//
// **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
// the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
func (s *RouteOptimizationAPI) AsyncVrp(ctx context.Context, request operations.AsyncVrpRequest) (*operations.AsyncVrpResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vrp/optimize"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.AsyncVrpResponse{
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
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BadRequest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BadRequest = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InternalErrorMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InternalErrorMessage = out
		}
	}

	return res, nil
}

// GetSolution - GET the solution (batch mode)
//
// Take the job id and fetch the solution for the vehicle routing problem from this URL:
//
// ```
// https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
// ```
//
// You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
func (s *RouteOptimizationAPI) GetSolution(ctx context.Context, request operations.GetSolutionRequest) (*operations.GetSolutionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vrp/solution/{jobId}", request.PathParams)

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

	res := &operations.GetSolutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Response
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Response = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BadRequest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BadRequest = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSolution404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSolution404ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// SolveVrp - POST route optimization problem
//
// To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
//
// # To solve a new vehicle routing problem, make a HTTP POST to this URL
//
// ```
// https://graphhopper.com/api/1/vrp?key=<your_key>
// ```
//
// It returns the solution to this problem in the JSON response.
//
// Please note that this URL is very well suited to solve minor problems.
// Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
// To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
func (s *RouteOptimizationAPI) SolveVrp(ctx context.Context, request operations.SolveVrpRequest) (*operations.SolveVrpResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vrp"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.SolveVrpResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Response
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Response = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BadRequest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BadRequest = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InternalErrorMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InternalErrorMessage = out
		}
	}

	return res, nil
}
