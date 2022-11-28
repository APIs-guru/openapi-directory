package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Projects struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProjects(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Projects {
	return &Projects{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// IdentitytoolkitProjectsIdentityPlatformInitializeAuth - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
func (s *Projects) IdentitytoolkitProjectsIdentityPlatformInitializeAuth(ctx context.Context, request operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest) (*operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{project}/identityPlatform:initializeAuth", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsCreate - Create a tenant. Requires write permission on the Agent project.
func (s *Projects) IdentitytoolkitProjectsTenantsCreate(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsCreateRequest) (*operations.IdentitytoolkitProjectsTenantsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/tenants", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2Tenant
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2Tenant = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate - Create a default supported Idp configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest) (*operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/defaultSupportedIdpConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList - List all default supported Idp configurations for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest) (*operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/defaultSupportedIdpConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsGetIamPolicy - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
func (s *Projects) IdentitytoolkitProjectsTenantsGetIamPolicy(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest) (*operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{resource}:getIamPolicy", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleIamV1Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleIamV1Policy = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate - Create an inbound SAML configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsInboundSamlConfigsCreate(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest) (*operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/inboundSamlConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsInboundSamlConfigsList - List all inbound SAML configurations for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsInboundSamlConfigsList(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest) (*operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/inboundSamlConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsList - List tenants under the given agent project. Requires read permission on the Agent project.
func (s *Projects) IdentitytoolkitProjectsTenantsList(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsListRequest) (*operations.IdentitytoolkitProjectsTenantsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/tenants", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate - Create an Oidc Idp configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsOauthIdpConfigsCreate(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest) (*operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/oauthIdpConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete - Delete an Oidc Idp configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsOauthIdpConfigsDelete(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest) (*operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsOauthIdpConfigsGet - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsOauthIdpConfigsGet(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest) (*operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsOauthIdpConfigsList - List all Oidc Idp configurations for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsOauthIdpConfigsList(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest) (*operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{parent}/oauthIdpConfigs", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch - Update an Oidc Idp configuration for an Identity Toolkit project.
func (s *Projects) IdentitytoolkitProjectsTenantsOauthIdpConfigsPatch(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest) (*operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsSetIamPolicy - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
func (s *Projects) IdentitytoolkitProjectsTenantsSetIamPolicy(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest) (*operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{resource}:setIamPolicy", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleIamV1Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleIamV1Policy = out
		}
	}

	return res, nil
}

// IdentitytoolkitProjectsTenantsTestIamPermissions - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
func (s *Projects) IdentitytoolkitProjectsTenantsTestIamPermissions(ctx context.Context, request operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest) (*operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{resource}:testIamPermissions", request.PathParams)

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

	res := &operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleIamV1TestIamPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleIamV1TestIamPermissionsResponse = out
		}
	}

	return res, nil
}
