package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type AdaptivePolicy struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAdaptivePolicy(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AdaptivePolicy {
	return &AdaptivePolicy{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateOrganizationAdaptivePolicyACL - Creates new adaptive policy ACL
// Creates new adaptive policy ACL
func (s *AdaptivePolicy) CreateOrganizationAdaptivePolicyACL(ctx context.Context, request operations.CreateOrganizationAdaptivePolicyACLRequest) (*operations.CreateOrganizationAdaptivePolicyACLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/acls", request.PathParams)

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

	res := &operations.CreateOrganizationAdaptivePolicyACLResponse{
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

			res.CreateOrganizationAdaptivePolicyACL200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteOrganizationAdaptivePolicyACL - Deletes the specified adaptive policy ACL
// Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
func (s *AdaptivePolicy) DeleteOrganizationAdaptivePolicyACL(ctx context.Context, request operations.DeleteOrganizationAdaptivePolicyACLRequest) (*operations.DeleteOrganizationAdaptivePolicyACLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteOrganizationAdaptivePolicyACLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetOrganizationAdaptivePolicyACL - Returns the adaptive policy ACL information
// Returns the adaptive policy ACL information
func (s *AdaptivePolicy) GetOrganizationAdaptivePolicyACL(ctx context.Context, request operations.GetOrganizationAdaptivePolicyACLRequest) (*operations.GetOrganizationAdaptivePolicyACLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.PathParams)

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

	res := &operations.GetOrganizationAdaptivePolicyACLResponse{
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

			res.GetOrganizationAdaptivePolicyACL200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationAdaptivePolicyAcls - List adaptive policy ACLs in a organization
// List adaptive policy ACLs in a organization
func (s *AdaptivePolicy) GetOrganizationAdaptivePolicyAcls(ctx context.Context, request operations.GetOrganizationAdaptivePolicyAclsRequest) (*operations.GetOrganizationAdaptivePolicyAclsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/acls", request.PathParams)

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

	res := &operations.GetOrganizationAdaptivePolicyAclsResponse{
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

			res.GetOrganizationAdaptivePolicyAcls200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationAdaptivePolicySettings - Returns global adaptive policy settings in an organization
// Returns global adaptive policy settings in an organization
func (s *AdaptivePolicy) GetOrganizationAdaptivePolicySettings(ctx context.Context, request operations.GetOrganizationAdaptivePolicySettingsRequest) (*operations.GetOrganizationAdaptivePolicySettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/settings", request.PathParams)

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

	res := &operations.GetOrganizationAdaptivePolicySettingsResponse{
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

			res.GetOrganizationAdaptivePolicySettings200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateOrganizationAdaptivePolicyACL - Updates an adaptive policy ACL
// Updates an adaptive policy ACL
func (s *AdaptivePolicy) UpdateOrganizationAdaptivePolicyACL(ctx context.Context, request operations.UpdateOrganizationAdaptivePolicyACLRequest) (*operations.UpdateOrganizationAdaptivePolicyACLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateOrganizationAdaptivePolicyACLResponse{
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

			res.UpdateOrganizationAdaptivePolicyACL200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateOrganizationAdaptivePolicySettings - Update global adaptive policy settings
// Update global adaptive policy settings
func (s *AdaptivePolicy) UpdateOrganizationAdaptivePolicySettings(ctx context.Context, request operations.UpdateOrganizationAdaptivePolicySettingsRequest) (*operations.UpdateOrganizationAdaptivePolicySettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/adaptivePolicy/settings", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateOrganizationAdaptivePolicySettingsResponse{
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

			res.UpdateOrganizationAdaptivePolicySettings200ApplicationJSONObject = out
		}
	}

	return res, nil
}
