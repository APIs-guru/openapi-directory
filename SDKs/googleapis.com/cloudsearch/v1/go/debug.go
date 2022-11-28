package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Debug struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDebug(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Debug {
	return &Debug{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CloudsearchDebugDatasourcesItemsCheckAccess - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
func (s *Debug) CloudsearchDebugDatasourcesItemsCheckAccess(ctx context.Context, request operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest) (*operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/debug/{name}:checkAccess", request.PathParams)

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

	res := &operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CheckAccessResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CheckAccessResponse = out
		}
	}

	return res, nil
}

// CloudsearchDebugDatasourcesItemsSearchByViewURL - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
func (s *Debug) CloudsearchDebugDatasourcesItemsSearchByViewURL(ctx context.Context, request operations.CloudsearchDebugDatasourcesItemsSearchByViewURLRequest) (*operations.CloudsearchDebugDatasourcesItemsSearchByViewURLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/debug/{name}/items:searchByViewUrl", request.PathParams)

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

	res := &operations.CloudsearchDebugDatasourcesItemsSearchByViewURLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchItemsByViewURLResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchItemsByViewURLResponse = out
		}
	}

	return res, nil
}

// CloudsearchDebugIdentitysourcesItemsListForunmappedidentity - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
func (s *Debug) CloudsearchDebugIdentitysourcesItemsListForunmappedidentity(ctx context.Context, request operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest) (*operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/debug/{parent}/items:forunmappedidentity", request.PathParams)

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

	res := &operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListItemNamesForUnmappedIdentityResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListItemNamesForUnmappedIdentityResponse = out
		}
	}

	return res, nil
}

// CloudsearchDebugIdentitysourcesUnmappedidsList - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
func (s *Debug) CloudsearchDebugIdentitysourcesUnmappedidsList(ctx context.Context, request operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest) (*operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/debug/{parent}/unmappedids", request.PathParams)

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

	res := &operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListUnmappedIdentitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListUnmappedIdentitiesResponse = out
		}
	}

	return res, nil
}
