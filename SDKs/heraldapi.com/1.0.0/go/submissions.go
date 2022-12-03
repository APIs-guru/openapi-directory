package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Submissions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSubmissions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Submissions {
	return &Submissions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSubmissionsSubmissionID - /submissions/{submission_id}
// ### Get a submission
//
// Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).
func (s *Submissions) GetSubmissionsSubmissionID(ctx context.Context, request operations.GetSubmissionsSubmissionIDRequest) (*operations.GetSubmissionsSubmissionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/submissions/{submission_id}", request.PathParams)

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

	res := &operations.GetSubmissionsSubmissionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetSubmissionsSubmissionID200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetSubmissionsSubmissionID200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostSubmissions - /submissions
// ### Create a submission
//
// A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.
//
// > The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.
func (s *Submissions) PostSubmissions(ctx context.Context, request operations.PostSubmissionsRequest) (*operations.PostSubmissionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/submissions"

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

	res := &operations.PostSubmissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostSubmissions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostSubmissions200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostSubmissions400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostSubmissions400ApplicationJSONObject = out
		}
	}

	return res, nil
}
