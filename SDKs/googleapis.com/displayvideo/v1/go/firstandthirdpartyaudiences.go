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

type FirstAndThirdPartyAudiences struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFirstAndThirdPartyAudiences(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FirstAndThirdPartyAudiences {
	return &FirstAndThirdPartyAudiences{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DisplayvideoFirstAndThirdPartyAudiencesCreate - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
func (s *FirstAndThirdPartyAudiences) DisplayvideoFirstAndThirdPartyAudiencesCreate(ctx context.Context, request operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest) (*operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/firstAndThirdPartyAudiences"

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

	res := &operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FirstAndThirdPartyAudience
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FirstAndThirdPartyAudience = out
		}
	}

	return res, nil
}

// DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
func (s *FirstAndThirdPartyAudiences) DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(ctx context.Context, request operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest) (*operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers", request.PathParams)

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

	res := &operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EditCustomerMatchMembersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EditCustomerMatchMembersResponse = out
		}
	}

	return res, nil
}

// DisplayvideoFirstAndThirdPartyAudiencesGet - Gets a first and third party audience.
func (s *FirstAndThirdPartyAudiences) DisplayvideoFirstAndThirdPartyAudiencesGet(ctx context.Context, request operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest) (*operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.PathParams)

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

	res := &operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FirstAndThirdPartyAudience
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FirstAndThirdPartyAudience = out
		}
	}

	return res, nil
}

// DisplayvideoFirstAndThirdPartyAudiencesList - Lists first and third party audiences. The order is defined by the order_by parameter.
func (s *FirstAndThirdPartyAudiences) DisplayvideoFirstAndThirdPartyAudiencesList(ctx context.Context, request operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest) (*operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/firstAndThirdPartyAudiences"

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

	res := &operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListFirstAndThirdPartyAudiencesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFirstAndThirdPartyAudiencesResponse = out
		}
	}

	return res, nil
}

// DisplayvideoFirstAndThirdPartyAudiencesPatch - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
func (s *FirstAndThirdPartyAudiences) DisplayvideoFirstAndThirdPartyAudiencesPatch(ctx context.Context, request operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest) (*operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.PathParams)

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

	res := &operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FirstAndThirdPartyAudience
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FirstAndThirdPartyAudience = out
		}
	}

	return res, nil
}
