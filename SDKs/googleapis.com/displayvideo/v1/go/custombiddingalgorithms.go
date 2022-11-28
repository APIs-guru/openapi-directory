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

type CustomBiddingAlgorithms struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomBiddingAlgorithms(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomBiddingAlgorithms {
	return &CustomBiddingAlgorithms{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DisplayvideoCustomBiddingAlgorithmsCreate - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsCreate(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/customBiddingAlgorithms"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingAlgorithm
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingAlgorithm = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsGet - Gets a custom bidding algorithm.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsGet(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsGetRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingAlgorithm
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingAlgorithm = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsList - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsList(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsListRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/customBiddingAlgorithms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCustomBiddingAlgorithmsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCustomBiddingAlgorithmsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsPatch - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsPatch(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingAlgorithm
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingAlgorithm = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsScriptsCreate - Creates a new custom bidding script. Returns the newly created script if successful.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsScriptsCreate(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingScript
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingScript = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsScriptsGet - Gets a custom bidding script.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsScriptsGet(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingScript
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingScript = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsScriptsList - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsScriptsList(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCustomBiddingScriptsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCustomBiddingScriptsResponse = out
		}
	}

	return res, nil
}

// DisplayvideoCustomBiddingAlgorithmsUploadScript - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
func (s *CustomBiddingAlgorithms) DisplayvideoCustomBiddingAlgorithmsUploadScript(ctx context.Context, request operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest) (*operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomBiddingScriptRef
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomBiddingScriptRef = out
		}
	}

	return res, nil
}
