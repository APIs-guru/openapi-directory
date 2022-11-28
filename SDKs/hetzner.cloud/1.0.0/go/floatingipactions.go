package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type FloatingIPActions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFloatingIPActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FloatingIPActions {
	return &FloatingIPActions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetFloatingIpsIDActions - Get all Actions for a Floating IP
// Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
func (s *FloatingIPActions) GetFloatingIpsIDActions(ctx context.Context, request operations.GetFloatingIpsIDActionsRequest) (*operations.GetFloatingIpsIDActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFloatingIpsIDActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetFloatingIpsIDActions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetFloatingIpsIDActions200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetFloatingIpsIDActionsActionID - Get an Action for a Floating IP
// Returns a specific Action object for a Floating IP.
func (s *FloatingIPActions) GetFloatingIpsIDActionsActionID(ctx context.Context, request operations.GetFloatingIpsIDActionsActionIDRequest) (*operations.GetFloatingIpsIDActionsActionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions/{action_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFloatingIpsIDActionsActionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetFloatingIpsIDActionsActionIDActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostFloatingIpsIDActionsAssign - Assign a Floating IP to a Server
// Assigns a Floating IP to a Server.
func (s *FloatingIPActions) PostFloatingIpsIDActionsAssign(ctx context.Context, request operations.PostFloatingIpsIDActionsAssignRequest) (*operations.PostFloatingIpsIDActionsAssignResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions/assign", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFloatingIpsIDActionsAssignResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFloatingIpsIDActionsAssignActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostFloatingIpsIDActionsChangeDNSPtr - Change reverse DNS entry for a Floating IP
// Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
func (s *FloatingIPActions) PostFloatingIpsIDActionsChangeDNSPtr(ctx context.Context, request operations.PostFloatingIpsIDActionsChangeDNSPtrRequest) (*operations.PostFloatingIpsIDActionsChangeDNSPtrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions/change_dns_ptr", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFloatingIpsIDActionsChangeDNSPtrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFloatingIpsIDActionsChangeDNSPtrActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostFloatingIpsIDActionsChangeProtection - Change Floating IP Protection
// Changes the protection configuration of the Floating IP.
func (s *FloatingIPActions) PostFloatingIpsIDActionsChangeProtection(ctx context.Context, request operations.PostFloatingIpsIDActionsChangeProtectionRequest) (*operations.PostFloatingIpsIDActionsChangeProtectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions/change_protection", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFloatingIpsIDActionsChangeProtectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFloatingIpsIDActionsChangeProtectionActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostFloatingIpsIDActionsUnassign - Unassign a Floating IP
// Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
func (s *FloatingIPActions) PostFloatingIpsIDActionsUnassign(ctx context.Context, request operations.PostFloatingIpsIDActionsUnassignRequest) (*operations.PostFloatingIpsIDActionsUnassignResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/floating_ips/{id}/actions/unassign", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostFloatingIpsIDActionsUnassignResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostFloatingIpsIDActionsUnassignActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}
