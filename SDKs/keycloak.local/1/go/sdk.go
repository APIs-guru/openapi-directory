package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"http://keycloak.local",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations - Schema source code
type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteRealm - Delete the realm
func (s *SDK) DeleteRealm(ctx context.Context, request operations.DeleteRealmRequest) (*operations.DeleteRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}", request.PathParams)

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

	res := &operations.DeleteRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAdminEvents - Delete all admin events
func (s *SDK) DeleteRealmAdminEvents(ctx context.Context, request operations.DeleteRealmAdminEventsRequest) (*operations.DeleteRealmAdminEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/admin-events", request.PathParams)

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

	res := &operations.DeleteRealmAdminEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
func (s *SDK) DeleteRealmAttackDetectionBruteForceUsers(ctx context.Context, request operations.DeleteRealmAttackDetectionBruteForceUsersRequest) (*operations.DeleteRealmAttackDetectionBruteForceUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users", request.PathParams)

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

	res := &operations.DeleteRealmAttackDetectionBruteForceUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAttackDetectionBruteForceUsersUserID - Clear any user login failures for the user   This can release temporary disabled user
func (s *SDK) DeleteRealmAttackDetectionBruteForceUsersUserID(ctx context.Context, request operations.DeleteRealmAttackDetectionBruteForceUsersUserIDRequest) (*operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", request.PathParams)

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

	res := &operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAuthenticationConfigID - Delete authenticator configuration
func (s *SDK) DeleteRealmAuthenticationConfigID(ctx context.Context, request operations.DeleteRealmAuthenticationConfigIDRequest) (*operations.DeleteRealmAuthenticationConfigIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/config/{id}", request.PathParams)

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

	res := &operations.DeleteRealmAuthenticationConfigIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAuthenticationExecutionsExecutionID - Delete execution
func (s *SDK) DeleteRealmAuthenticationExecutionsExecutionID(ctx context.Context, request operations.DeleteRealmAuthenticationExecutionsExecutionIDRequest) (*operations.DeleteRealmAuthenticationExecutionsExecutionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions/{executionId}", request.PathParams)

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

	res := &operations.DeleteRealmAuthenticationExecutionsExecutionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAuthenticationFlowsID - Delete an authentication flow
func (s *SDK) DeleteRealmAuthenticationFlowsID(ctx context.Context, request operations.DeleteRealmAuthenticationFlowsIDRequest) (*operations.DeleteRealmAuthenticationFlowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{id}", request.PathParams)

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

	res := &operations.DeleteRealmAuthenticationFlowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAuthenticationRequiredActionsAlias - Delete required action
func (s *SDK) DeleteRealmAuthenticationRequiredActionsAlias(ctx context.Context, request operations.DeleteRealmAuthenticationRequiredActionsAliasRequest) (*operations.DeleteRealmAuthenticationRequiredActionsAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions/{alias}", request.PathParams)

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

	res := &operations.DeleteRealmAuthenticationRequiredActionsAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientScopesId1ProtocolMappersModelsId2 - Delete the mapper
func (s *SDK) DeleteRealmClientScopesId1ProtocolMappersModelsId2(ctx context.Context, request operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request) (*operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.PathParams)

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

	res := &operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientScopesID - Delete the client scope
func (s *SDK) DeleteRealmClientScopesID(ctx context.Context, request operations.DeleteRealmClientScopesIDRequest) (*operations.DeleteRealmClientScopesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}", request.PathParams)

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

	res := &operations.DeleteRealmClientScopesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientScopesIDScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
func (s *SDK) DeleteRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.DeleteRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientScopesIDScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
func (s *SDK) DeleteRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.DeleteRealmClientScopesIDScopeMappingsRealmRequest) (*operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsId1ProtocolMappersModelsId2 - Delete the mapper
func (s *SDK) DeleteRealmClientsId1ProtocolMappersModelsId2(ctx context.Context, request operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request) (*operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.PathParams)

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

	res := &operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsID - Delete the client
func (s *SDK) DeleteRealmClientsID(ctx context.Context, request operations.DeleteRealmClientsIDRequest) (*operations.DeleteRealmClientsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmClientsIDDefaultClientScopesClientScopeID(ctx context.Context, request operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDRequest) (*operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDNodesNode - Unregister a cluster node from the client
func (s *SDK) DeleteRealmClientsIDNodesNode(ctx context.Context, request operations.DeleteRealmClientsIDNodesNodeRequest) (*operations.DeleteRealmClientsIDNodesNodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/nodes/{node}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDNodesNodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmClientsIDOptionalClientScopesClientScopeID(ctx context.Context, request operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDRequest) (*operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDRolesRoleName - Delete a role by name
func (s *SDK) DeleteRealmClientsIDRolesRoleName(ctx context.Context, request operations.DeleteRealmClientsIDRolesRoleNameRequest) (*operations.DeleteRealmClientsIDRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDRolesRoleNameComposites - Remove roles from the role’s composite
func (s *SDK) DeleteRealmClientsIDRolesRoleNameComposites(ctx context.Context, request operations.DeleteRealmClientsIDRolesRoleNameCompositesRequest) (*operations.DeleteRealmClientsIDRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmClientsIDRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
func (s *SDK) DeleteRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.DeleteRealmClientsIDScopeMappingsClientsClientRequest) (*operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
func (s *SDK) DeleteRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.DeleteRealmClientsIDScopeMappingsRealmRequest) (*operations.DeleteRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmClientsIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmClientsInitialAccessID(ctx context.Context, request operations.DeleteRealmClientsInitialAccessIDRequest) (*operations.DeleteRealmClientsInitialAccessIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients-initial-access/{id}", request.PathParams)

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

	res := &operations.DeleteRealmClientsInitialAccessIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmComponentsID(ctx context.Context, request operations.DeleteRealmComponentsIDRequest) (*operations.DeleteRealmComponentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components/{id}", request.PathParams)

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

	res := &operations.DeleteRealmComponentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmDefaultDefaultClientScopesClientScopeID(ctx context.Context, request operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDRequest) (*operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", request.PathParams)

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

	res := &operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmDefaultGroupsGroupID(ctx context.Context, request operations.DeleteRealmDefaultGroupsGroupIDRequest) (*operations.DeleteRealmDefaultGroupsGroupIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-groups/{groupId}", request.PathParams)

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

	res := &operations.DeleteRealmDefaultGroupsGroupIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmDefaultOptionalClientScopesClientScopeID(ctx context.Context, request operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDRequest) (*operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", request.PathParams)

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

	res := &operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmEvents - Delete all events
func (s *SDK) DeleteRealmEvents(ctx context.Context, request operations.DeleteRealmEventsRequest) (*operations.DeleteRealmEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/events", request.PathParams)

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

	res := &operations.DeleteRealmEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmGroupsID(ctx context.Context, request operations.DeleteRealmGroupsIDRequest) (*operations.DeleteRealmGroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}", request.PathParams)

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

	res := &operations.DeleteRealmGroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmGroupsIDRoleMappingsClientsClient - Delete client-level roles from user role mapping
func (s *SDK) DeleteRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.DeleteRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmGroupsIDRoleMappingsRealm - Delete realm-level role mappings
func (s *SDK) DeleteRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.DeleteRealmGroupsIDRoleMappingsRealmRequest) (*operations.DeleteRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmGroupsIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmIdentityProviderInstancesAlias - Delete the identity provider
func (s *SDK) DeleteRealmIdentityProviderInstancesAlias(ctx context.Context, request operations.DeleteRealmIdentityProviderInstancesAliasRequest) (*operations.DeleteRealmIdentityProviderInstancesAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}", request.PathParams)

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

	res := &operations.DeleteRealmIdentityProviderInstancesAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmIdentityProviderInstancesAliasMappersID - Delete a mapper for the identity provider
func (s *SDK) DeleteRealmIdentityProviderInstancesAliasMappersID(ctx context.Context, request operations.DeleteRealmIdentityProviderInstancesAliasMappersIDRequest) (*operations.DeleteRealmIdentityProviderInstancesAliasMappersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.PathParams)

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

	res := &operations.DeleteRealmIdentityProviderInstancesAliasMappersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmRolesByIDRoleID - Delete the role
func (s *SDK) DeleteRealmRolesByIDRoleID(ctx context.Context, request operations.DeleteRealmRolesByIDRoleIDRequest) (*operations.DeleteRealmRolesByIDRoleIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}", request.PathParams)

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

	res := &operations.DeleteRealmRolesByIDRoleIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmRolesByIDRoleIDComposites - Remove a set of roles from the role’s composite
func (s *SDK) DeleteRealmRolesByIDRoleIDComposites(ctx context.Context, request operations.DeleteRealmRolesByIDRoleIDCompositesRequest) (*operations.DeleteRealmRolesByIDRoleIDCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/composites", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmRolesByIDRoleIDCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmRolesRoleName - Delete a role by name
func (s *SDK) DeleteRealmRolesRoleName(ctx context.Context, request operations.DeleteRealmRolesRoleNameRequest) (*operations.DeleteRealmRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}", request.PathParams)

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

	res := &operations.DeleteRealmRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmRolesRoleNameComposites - Remove roles from the role’s composite
func (s *SDK) DeleteRealmRolesRoleNameComposites(ctx context.Context, request operations.DeleteRealmRolesRoleNameCompositesRequest) (*operations.DeleteRealmRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/composites", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmSessionsSession - Remove a specific user session.
func (s *SDK) DeleteRealmSessionsSession(ctx context.Context, request operations.DeleteRealmSessionsSessionRequest) (*operations.DeleteRealmSessionsSessionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/sessions/{session}", request.PathParams)

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

	res := &operations.DeleteRealmSessionsSessionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersID - Delete the user
func (s *SDK) DeleteRealmUsersID(ctx context.Context, request operations.DeleteRealmUsersIDRequest) (*operations.DeleteRealmUsersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDConsentsClient - Revoke consent and offline tokens for particular client from user
func (s *SDK) DeleteRealmUsersIDConsentsClient(ctx context.Context, request operations.DeleteRealmUsersIDConsentsClientRequest) (*operations.DeleteRealmUsersIDConsentsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/consents/{client}", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDConsentsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDCredentialsCredentialID - Remove a credential for a user
func (s *SDK) DeleteRealmUsersIDCredentialsCredentialID(ctx context.Context, request operations.DeleteRealmUsersIDCredentialsCredentialIDRequest) (*operations.DeleteRealmUsersIDCredentialsCredentialIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/credentials/{credentialId}", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDCredentialsCredentialIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDFederatedIdentityProvider - Remove a social login provider from user
func (s *SDK) DeleteRealmUsersIDFederatedIdentityProvider(ctx context.Context, request operations.DeleteRealmUsersIDFederatedIdentityProviderRequest) (*operations.DeleteRealmUsersIDFederatedIdentityProviderResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/federated-identity/{provider}", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDFederatedIdentityProviderResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) DeleteRealmUsersIDGroupsGroupID(ctx context.Context, request operations.DeleteRealmUsersIDGroupsGroupIDRequest) (*operations.DeleteRealmUsersIDGroupsGroupIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/groups/{groupId}", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDGroupsGroupIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDRoleMappingsClientsClient - Delete client-level roles from user role mapping
func (s *SDK) DeleteRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.DeleteRealmUsersIDRoleMappingsClientsClientRequest) (*operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDRoleMappingsRealm - Delete realm-level role mappings
func (s *SDK) DeleteRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.DeleteRealmUsersIDRoleMappingsRealmRequest) (*operations.DeleteRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
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

	res := &operations.DeleteRealmUsersIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// Get - Get themes, social providers, auth providers, and event listeners available on this server
func (s *SDK) Get(ctx context.Context) (*operations.GetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/"

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

	res := &operations.GetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServerInfoRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServerInfoRepresentation = out
		}
	}

	return res, nil
}

// GetIDName - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
func (s *SDK) GetIDName(ctx context.Context, request operations.GetIDNameRequest) (*operations.GetIDNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{id}/name", request.PathParams)

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

	res := &operations.GetIDNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIDName2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealm - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
func (s *SDK) GetRealm(ctx context.Context, request operations.GetRealmRequest) (*operations.GetRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}", request.PathParams)

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

	res := &operations.GetRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RealmRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RealmRepresentation = out
		}
	}

	return res, nil
}

// GetRealmAdminEvents - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
func (s *SDK) GetRealmAdminEvents(ctx context.Context, request operations.GetRealmAdminEventsRequest) (*operations.GetRealmAdminEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/admin-events", request.PathParams)

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

	res := &operations.GetRealmAdminEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AdminEventRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AdminEventRepresentations = out
		}
	}

	return res, nil
}

// GetRealmAttackDetectionBruteForceUsersUserID - Get status of a username in brute force detection
func (s *SDK) GetRealmAttackDetectionBruteForceUsersUserID(ctx context.Context, request operations.GetRealmAttackDetectionBruteForceUsersUserIDRequest) (*operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", request.PathParams)

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

	res := &operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAttackDetectionBruteForceUsersUserID2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationAuthenticatorProviders - Get authenticator providers   Returns a list of authenticator providers.
func (s *SDK) GetRealmAuthenticationAuthenticatorProviders(ctx context.Context, request operations.GetRealmAuthenticationAuthenticatorProvidersRequest) (*operations.GetRealmAuthenticationAuthenticatorProvidersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/authenticator-providers", request.PathParams)

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

	res := &operations.GetRealmAuthenticationAuthenticatorProvidersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationAuthenticatorProviders2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationClientAuthenticatorProviders - Get client authenticator providers   Returns a list of client authenticator providers.
func (s *SDK) GetRealmAuthenticationClientAuthenticatorProviders(ctx context.Context, request operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest) (*operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/client-authenticator-providers", request.PathParams)

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

	res := &operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationClientAuthenticatorProviders2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationConfigDescriptionProviderID - Get authenticator provider’s configuration description
func (s *SDK) GetRealmAuthenticationConfigDescriptionProviderID(ctx context.Context, request operations.GetRealmAuthenticationConfigDescriptionProviderIDRequest) (*operations.GetRealmAuthenticationConfigDescriptionProviderIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/config-description/{providerId}", request.PathParams)

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

	res := &operations.GetRealmAuthenticationConfigDescriptionProviderIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticatorConfigInfoRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticatorConfigInfoRepresentation = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationConfigID - Get authenticator configuration
func (s *SDK) GetRealmAuthenticationConfigID(ctx context.Context, request operations.GetRealmAuthenticationConfigIDRequest) (*operations.GetRealmAuthenticationConfigIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/config/{id}", request.PathParams)

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

	res := &operations.GetRealmAuthenticationConfigIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticatorConfigRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticatorConfigRepresentation = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationExecutionsExecutionID - Get Single Execution
func (s *SDK) GetRealmAuthenticationExecutionsExecutionID(ctx context.Context, request operations.GetRealmAuthenticationExecutionsExecutionIDRequest) (*operations.GetRealmAuthenticationExecutionsExecutionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions/{executionId}", request.PathParams)

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

	res := &operations.GetRealmAuthenticationExecutionsExecutionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmAuthenticationFlows - Get authentication flows   Returns a list of authentication flows.
func (s *SDK) GetRealmAuthenticationFlows(ctx context.Context, request operations.GetRealmAuthenticationFlowsRequest) (*operations.GetRealmAuthenticationFlowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows", request.PathParams)

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

	res := &operations.GetRealmAuthenticationFlowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AuthenticationFlowRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationFlowRepresentations = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationFlowsFlowAliasExecutions - Get authentication executions for a flow
func (s *SDK) GetRealmAuthenticationFlowsFlowAliasExecutions(ctx context.Context, request operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest) (*operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", request.PathParams)

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

	res := &operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmAuthenticationFlowsID - Get authentication flow for id
func (s *SDK) GetRealmAuthenticationFlowsID(ctx context.Context, request operations.GetRealmAuthenticationFlowsIDRequest) (*operations.GetRealmAuthenticationFlowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{id}", request.PathParams)

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

	res := &operations.GetRealmAuthenticationFlowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationFlowRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationFlowRepresentation = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationFormActionProviders - Get form action providers   Returns a list of form action providers.
func (s *SDK) GetRealmAuthenticationFormActionProviders(ctx context.Context, request operations.GetRealmAuthenticationFormActionProvidersRequest) (*operations.GetRealmAuthenticationFormActionProvidersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/form-action-providers", request.PathParams)

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

	res := &operations.GetRealmAuthenticationFormActionProvidersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationFormActionProviders2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationFormProviders - Get form providers   Returns a list of form providers.
func (s *SDK) GetRealmAuthenticationFormProviders(ctx context.Context, request operations.GetRealmAuthenticationFormProvidersRequest) (*operations.GetRealmAuthenticationFormProvidersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/form-providers", request.PathParams)

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

	res := &operations.GetRealmAuthenticationFormProvidersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationFormProviders2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationPerClientConfigDescription - Get configuration descriptions for all clients
func (s *SDK) GetRealmAuthenticationPerClientConfigDescription(ctx context.Context, request operations.GetRealmAuthenticationPerClientConfigDescriptionRequest) (*operations.GetRealmAuthenticationPerClientConfigDescriptionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/per-client-config-description", request.PathParams)

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

	res := &operations.GetRealmAuthenticationPerClientConfigDescriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationPerClientConfigDescription2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationRequiredActions - Get required actions   Returns a list of required actions.
func (s *SDK) GetRealmAuthenticationRequiredActions(ctx context.Context, request operations.GetRealmAuthenticationRequiredActionsRequest) (*operations.GetRealmAuthenticationRequiredActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions", request.PathParams)

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

	res := &operations.GetRealmAuthenticationRequiredActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RequiredActionProviderRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RequiredActionProviderRepresentations = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationRequiredActionsAlias - Get required action for alias
func (s *SDK) GetRealmAuthenticationRequiredActionsAlias(ctx context.Context, request operations.GetRealmAuthenticationRequiredActionsAliasRequest) (*operations.GetRealmAuthenticationRequiredActionsAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions/{alias}", request.PathParams)

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

	res := &operations.GetRealmAuthenticationRequiredActionsAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RequiredActionProviderRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RequiredActionProviderRepresentation = out
		}
	}

	return res, nil
}

// GetRealmAuthenticationUnregisteredRequiredActions - Get unregistered required actions   Returns a list of unregistered required actions.
func (s *SDK) GetRealmAuthenticationUnregisteredRequiredActions(ctx context.Context, request operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest) (*operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/unregistered-required-actions", request.PathParams)

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

	res := &operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAuthenticationUnregisteredRequiredActions2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmClientRegistrationPolicyProviders - Base path for retrieve providers with the configProperties properly filled
func (s *SDK) GetRealmClientRegistrationPolicyProviders(ctx context.Context, request operations.GetRealmClientRegistrationPolicyProvidersRequest) (*operations.GetRealmClientRegistrationPolicyProvidersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-registration-policy/providers", request.PathParams)

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

	res := &operations.GetRealmClientRegistrationPolicyProvidersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ComponentTypeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComponentTypeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopes - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
func (s *SDK) GetRealmClientScopes(ctx context.Context, request operations.GetRealmClientScopesRequest) (*operations.GetRealmClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes", request.PathParams)

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

	res := &operations.GetRealmClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesId1ProtocolMappersModelsId2 - Get mapper by id
func (s *SDK) GetRealmClientScopesId1ProtocolMappersModelsId2(ctx context.Context, request operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request) (*operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.PathParams)

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

	res := &operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientScopesID - Get representation of the client scope
func (s *SDK) GetRealmClientScopesID(ctx context.Context, request operations.GetRealmClientScopesIDRequest) (*operations.GetRealmClientScopesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDProtocolMappersModels - Get mappers
func (s *SDK) GetRealmClientScopesIDProtocolMappersModels(ctx context.Context, request operations.GetRealmClientScopesIDProtocolMappersModelsRequest) (*operations.GetRealmClientScopesIDProtocolMappersModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDProtocolMappersModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
func (s *SDK) GetRealmClientScopesIDProtocolMappersProtocolProtocol(ctx context.Context, request operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolRequest) (*operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappings - Get all scope mappings for the client
func (s *SDK) GetRealmClientScopesIDScopeMappings(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRequest) (*operations.GetRealmClientScopesIDScopeMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
func (s *SDK) GetRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
func (s *SDK) GetRealmClientScopesIDScopeMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
func (s *SDK) GetRealmClientScopesIDScopeMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsRealm - Get realm-level roles associated with the client’s scope
func (s *SDK) GetRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
func (s *SDK) GetRealmClientScopesIDScopeMappingsRealmAvailable(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmAvailableRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
func (s *SDK) GetRealmClientScopesIDScopeMappingsRealmComposite(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmCompositeRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientSessionStats - Get client session stats   Returns a JSON map.
func (s *SDK) GetRealmClientSessionStats(ctx context.Context, request operations.GetRealmClientSessionStatsRequest) (*operations.GetRealmClientSessionStatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-session-stats", request.PathParams)

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

	res := &operations.GetRealmClientSessionStatsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmClientSessionStats2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

// GetRealmClients - Get clients belonging to the realm   Returns a list of clients belonging to the realm
func (s *SDK) GetRealmClients(ctx context.Context, request operations.GetRealmClientsRequest) (*operations.GetRealmClientsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients", request.PathParams)

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

	res := &operations.GetRealmClientsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsId1ProtocolMappersModelsId2 - Get mapper by id
func (s *SDK) GetRealmClientsId1ProtocolMappersModelsId2(ctx context.Context, request operations.GetRealmClientsId1ProtocolMappersModelsId2Request) (*operations.GetRealmClientsId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.PathParams)

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

	res := &operations.GetRealmClientsId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsID - Get representation of the client
func (s *SDK) GetRealmClientsID(ctx context.Context, request operations.GetRealmClientsIDRequest) (*operations.GetRealmClientsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}", request.PathParams)

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

	res := &operations.GetRealmClientsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClientRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDCertificatesAttr - Get key info
func (s *SDK) GetRealmClientsIDCertificatesAttr(ctx context.Context, request operations.GetRealmClientsIDCertificatesAttrRequest) (*operations.GetRealmClientsIDCertificatesAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}", request.PathParams)

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

	res := &operations.GetRealmClientsIDCertificatesAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDClientSecret - Get the client secret
func (s *SDK) GetRealmClientsIDClientSecret(ctx context.Context, request operations.GetRealmClientsIDClientSecretRequest) (*operations.GetRealmClientsIDClientSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/client-secret", request.PathParams)

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

	res := &operations.GetRealmClientsIDClientSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CredentialRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CredentialRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDDefaultClientScopes - Get default client scopes.
func (s *SDK) GetRealmClientsIDDefaultClientScopes(ctx context.Context, request operations.GetRealmClientsIDDefaultClientScopesRequest) (*operations.GetRealmClientsIDDefaultClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/default-client-scopes", request.PathParams)

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

	res := &operations.GetRealmClientsIDDefaultClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDEvaluateScopesGenerateExampleAccessToken - Create JSON with payload of example access token
func (s *SDK) GetRealmClientsIDEvaluateScopesGenerateExampleAccessToken(ctx context.Context, request operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenRequest) (*operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token", request.PathParams)

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

	res := &operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AccessToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccessToken = out
		}
	}

	return res, nil
}

// GetRealmClientsIDEvaluateScopesProtocolMappers - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
func (s *SDK) GetRealmClientsIDEvaluateScopesProtocolMappers(ctx context.Context, request operations.GetRealmClientsIDEvaluateScopesProtocolMappersRequest) (*operations.GetRealmClientsIDEvaluateScopesProtocolMappersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/evaluate-scopes/protocol-mappers", request.PathParams)

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

	res := &operations.GetRealmClientsIDEvaluateScopesProtocolMappersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGranted - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
func (s *SDK) GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGranted(ctx context.Context, request operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedRequest) (*operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted", request.PathParams)

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

	res := &operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGranted - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
func (s *SDK) GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGranted(ctx context.Context, request operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedRequest) (*operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted", request.PathParams)

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

	res := &operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmClientsIDInstallationProvidersProviderID(ctx context.Context, request operations.GetRealmClientsIDInstallationProvidersProviderIDRequest) (*operations.GetRealmClientsIDInstallationProvidersProviderIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/installation/providers/{providerId}", request.PathParams)

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

	res := &operations.GetRealmClientsIDInstallationProvidersProviderIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmClientsIDManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) GetRealmClientsIDManagementPermissions(ctx context.Context, request operations.GetRealmClientsIDManagementPermissionsRequest) (*operations.GetRealmClientsIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmClientsIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmClientsIDOfflineSessionCount - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
func (s *SDK) GetRealmClientsIDOfflineSessionCount(ctx context.Context, request operations.GetRealmClientsIDOfflineSessionCountRequest) (*operations.GetRealmClientsIDOfflineSessionCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/offline-session-count", request.PathParams)

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

	res := &operations.GetRealmClientsIDOfflineSessionCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmClientsIDOfflineSessionCount2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmClientsIDOfflineSessions - Get offline sessions for client   Returns a list of offline user sessions associated with this client
func (s *SDK) GetRealmClientsIDOfflineSessions(ctx context.Context, request operations.GetRealmClientsIDOfflineSessionsRequest) (*operations.GetRealmClientsIDOfflineSessionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/offline-sessions", request.PathParams)

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

	res := &operations.GetRealmClientsIDOfflineSessionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserSessionRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserSessionRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDOptionalClientScopes - Get optional client scopes.
func (s *SDK) GetRealmClientsIDOptionalClientScopes(ctx context.Context, request operations.GetRealmClientsIDOptionalClientScopesRequest) (*operations.GetRealmClientsIDOptionalClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/optional-client-scopes", request.PathParams)

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

	res := &operations.GetRealmClientsIDOptionalClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDProtocolMappersModels - Get mappers
func (s *SDK) GetRealmClientsIDProtocolMappersModels(ctx context.Context, request operations.GetRealmClientsIDProtocolMappersModelsRequest) (*operations.GetRealmClientsIDProtocolMappersModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/protocol-mappers/models", request.PathParams)

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

	res := &operations.GetRealmClientsIDProtocolMappersModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
func (s *SDK) GetRealmClientsIDProtocolMappersProtocolProtocol(ctx context.Context, request operations.GetRealmClientsIDProtocolMappersProtocolProtocolRequest) (*operations.GetRealmClientsIDProtocolMappersProtocolProtocolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}", request.PathParams)

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

	res := &operations.GetRealmClientsIDProtocolMappersProtocolProtocolResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ProtocolMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProtocolMapperRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRoles - Get all roles for the realm or client
func (s *SDK) GetRealmClientsIDRoles(ctx context.Context, request operations.GetRealmClientsIDRolesRequest) (*operations.GetRealmClientsIDRolesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleName - Get a role by name
func (s *SDK) GetRealmClientsIDRolesRoleName(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameRequest) (*operations.GetRealmClientsIDRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameComposites - Get composites of the role
func (s *SDK) GetRealmClientsIDRolesRoleNameComposites(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameCompositesRequest) (*operations.GetRealmClientsIDRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
func (s *SDK) GetRealmClientsIDRolesRoleNameCompositesClientsClient(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientRequest) (*operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
func (s *SDK) GetRealmClientsIDRolesRoleNameCompositesRealm(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameCompositesRealmRequest) (*operations.GetRealmClientsIDRolesRoleNameCompositesRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/realm", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameCompositesRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameGroups - Return List of Groups that have the specified role name
func (s *SDK) GetRealmClientsIDRolesRoleNameGroups(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameGroupsRequest) (*operations.GetRealmClientsIDRolesRoleNameGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/groups", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) GetRealmClientsIDRolesRoleNameManagementPermissions(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameManagementPermissionsRequest) (*operations.GetRealmClientsIDRolesRoleNameManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmClientsIDRolesRoleNameUsers - Return List of Users that have the specified role name
func (s *SDK) GetRealmClientsIDRolesRoleNameUsers(ctx context.Context, request operations.GetRealmClientsIDRolesRoleNameUsersRequest) (*operations.GetRealmClientsIDRolesRoleNameUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/users", request.PathParams)

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

	res := &operations.GetRealmClientsIDRolesRoleNameUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappings - Get all scope mappings for the client
func (s *SDK) GetRealmClientsIDScopeMappings(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRequest) (*operations.GetRealmClientsIDScopeMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
func (s *SDK) GetRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
func (s *SDK) GetRealmClientsIDScopeMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientAvailableRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
func (s *SDK) GetRealmClientsIDScopeMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientCompositeRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsRealm - Get realm-level roles associated with the client’s scope
func (s *SDK) GetRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmRequest) (*operations.GetRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
func (s *SDK) GetRealmClientsIDScopeMappingsRealmAvailable(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmAvailableRequest) (*operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
func (s *SDK) GetRealmClientsIDScopeMappingsRealmComposite(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmCompositeRequest) (*operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmClientsIDServiceAccountUser - Get a user dedicated to the service account
func (s *SDK) GetRealmClientsIDServiceAccountUser(ctx context.Context, request operations.GetRealmClientsIDServiceAccountUserRequest) (*operations.GetRealmClientsIDServiceAccountUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/service-account-user", request.PathParams)

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

	res := &operations.GetRealmClientsIDServiceAccountUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentation = out
		}
	}

	return res, nil
}

// GetRealmClientsIDSessionCount - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
func (s *SDK) GetRealmClientsIDSessionCount(ctx context.Context, request operations.GetRealmClientsIDSessionCountRequest) (*operations.GetRealmClientsIDSessionCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/session-count", request.PathParams)

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

	res := &operations.GetRealmClientsIDSessionCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmClientsIDSessionCount2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmClientsIDTestNodesAvailable - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
func (s *SDK) GetRealmClientsIDTestNodesAvailable(ctx context.Context, request operations.GetRealmClientsIDTestNodesAvailableRequest) (*operations.GetRealmClientsIDTestNodesAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/test-nodes-available", request.PathParams)

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

	res := &operations.GetRealmClientsIDTestNodesAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GlobalRequestResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalRequestResult = out
		}
	}

	return res, nil
}

// GetRealmClientsIDUserSessions - Get user sessions for client   Returns a list of user sessions associated with this client
func (s *SDK) GetRealmClientsIDUserSessions(ctx context.Context, request operations.GetRealmClientsIDUserSessionsRequest) (*operations.GetRealmClientsIDUserSessionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/user-sessions", request.PathParams)

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

	res := &operations.GetRealmClientsIDUserSessionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserSessionRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserSessionRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmClientsInitialAccess(ctx context.Context, request operations.GetRealmClientsInitialAccessRequest) (*operations.GetRealmClientsInitialAccessResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients-initial-access", request.PathParams)

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

	res := &operations.GetRealmClientsInitialAccessResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientInitialAccessPresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientInitialAccessPresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmComponents(ctx context.Context, request operations.GetRealmComponentsRequest) (*operations.GetRealmComponentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components", request.PathParams)

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

	res := &operations.GetRealmComponentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ComponentRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComponentRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmComponentsID(ctx context.Context, request operations.GetRealmComponentsIDRequest) (*operations.GetRealmComponentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components/{id}", request.PathParams)

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

	res := &operations.GetRealmComponentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ComponentRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComponentRepresentation = out
		}
	}

	return res, nil
}

// GetRealmComponentsIDSubComponentTypes - List of subcomponent types that are available to configure for a particular parent component.
func (s *SDK) GetRealmComponentsIDSubComponentTypes(ctx context.Context, request operations.GetRealmComponentsIDSubComponentTypesRequest) (*operations.GetRealmComponentsIDSubComponentTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components/{id}/sub-component-types", request.PathParams)

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

	res := &operations.GetRealmComponentsIDSubComponentTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ComponentTypeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ComponentTypeRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmCredentialRegistrators(ctx context.Context, request operations.GetRealmCredentialRegistratorsRequest) (*operations.GetRealmCredentialRegistratorsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/credential-registrators", request.PathParams)

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

	res := &operations.GetRealmCredentialRegistratorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmCredentialRegistrators2XxApplicationJSONStrings = out
		}
	}

	return res, nil
}

// GetRealmDefaultDefaultClientScopes - Get realm default client scopes.
func (s *SDK) GetRealmDefaultDefaultClientScopes(ctx context.Context, request operations.GetRealmDefaultDefaultClientScopesRequest) (*operations.GetRealmDefaultDefaultClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-default-client-scopes", request.PathParams)

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

	res := &operations.GetRealmDefaultDefaultClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmDefaultGroups - Get group hierarchy.
func (s *SDK) GetRealmDefaultGroups(ctx context.Context, request operations.GetRealmDefaultGroupsRequest) (*operations.GetRealmDefaultGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-groups", request.PathParams)

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

	res := &operations.GetRealmDefaultGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentations = out
		}
	}

	return res, nil
}

// GetRealmDefaultOptionalClientScopes - Get realm optional client scopes.
func (s *SDK) GetRealmDefaultOptionalClientScopes(ctx context.Context, request operations.GetRealmDefaultOptionalClientScopesRequest) (*operations.GetRealmDefaultOptionalClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-optional-client-scopes", request.PathParams)

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

	res := &operations.GetRealmDefaultOptionalClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ClientScopeRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientScopeRepresentations = out
		}
	}

	return res, nil
}

// GetRealmEvents - Get events   Returns all events, or filters them based on URL query parameters listed here
func (s *SDK) GetRealmEvents(ctx context.Context, request operations.GetRealmEventsRequest) (*operations.GetRealmEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/events", request.PathParams)

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

	res := &operations.GetRealmEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.EventRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventRepresentations = out
		}
	}

	return res, nil
}

// GetRealmEventsConfig - Get the events provider configuration   Returns JSON object with events provider configuration
func (s *SDK) GetRealmEventsConfig(ctx context.Context, request operations.GetRealmEventsConfigRequest) (*operations.GetRealmEventsConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/events/config", request.PathParams)

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

	res := &operations.GetRealmEventsConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RealmEventsConfigRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RealmEventsConfigRepresentation = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmGroupByPathPath(ctx context.Context, request operations.GetRealmGroupByPathPathRequest) (*operations.GetRealmGroupByPathPathResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/group-by-path/{path}", request.PathParams)

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

	res := &operations.GetRealmGroupByPathPathResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentation = out
		}
	}

	return res, nil
}

// GetRealmGroups - Get group hierarchy.
func (s *SDK) GetRealmGroups(ctx context.Context, request operations.GetRealmGroupsRequest) (*operations.GetRealmGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups", request.PathParams)

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

	res := &operations.GetRealmGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsCount - Returns the groups counts.
func (s *SDK) GetRealmGroupsCount(ctx context.Context, request operations.GetRealmGroupsCountRequest) (*operations.GetRealmGroupsCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/count", request.PathParams)

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

	res := &operations.GetRealmGroupsCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmGroupsCount2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmGroupsID(ctx context.Context, request operations.GetRealmGroupsIDRequest) (*operations.GetRealmGroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}", request.PathParams)

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

	res := &operations.GetRealmGroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentation = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) GetRealmGroupsIDManagementPermissions(ctx context.Context, request operations.GetRealmGroupsIDManagementPermissionsRequest) (*operations.GetRealmGroupsIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmGroupsIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDMembers - Get users   Returns a list of users, filtered according to query parameters
func (s *SDK) GetRealmGroupsIDMembers(ctx context.Context, request operations.GetRealmGroupsIDMembersRequest) (*operations.GetRealmGroupsIDMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/members", request.PathParams)

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

	res := &operations.GetRealmGroupsIDMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappings - Get role mappings
func (s *SDK) GetRealmGroupsIDRoleMappings(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRequest) (*operations.GetRealmGroupsIDRoleMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
func (s *SDK) GetRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
func (s *SDK) GetRealmGroupsIDRoleMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
func (s *SDK) GetRealmGroupsIDRoleMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsRealm - Get realm-level role mappings
func (s *SDK) GetRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
func (s *SDK) GetRealmGroupsIDRoleMappingsRealmAvailable(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmAvailableRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
func (s *SDK) GetRealmGroupsIDRoleMappingsRealmComposite(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmCompositeRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderInstances - Get identity providers
func (s *SDK) GetRealmIdentityProviderInstances(ctx context.Context, request operations.GetRealmIdentityProviderInstancesRequest) (*operations.GetRealmIdentityProviderInstancesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IdentityProviderRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IdentityProviderRepresentations = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAlias - Get the identity provider
func (s *SDK) GetRealmIdentityProviderInstancesAlias(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasRequest) (*operations.GetRealmIdentityProviderInstancesAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IdentityProviderRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IdentityProviderRepresentation = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAliasExport - Export public broker configuration for identity provider
func (s *SDK) GetRealmIdentityProviderInstancesAliasExport(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasExportRequest) (*operations.GetRealmIdentityProviderInstancesAliasExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/export", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) GetRealmIdentityProviderInstancesAliasManagementPermissions(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest) (*operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAliasMapperTypes - Get mapper types for identity provider
func (s *SDK) GetRealmIdentityProviderInstancesAliasMapperTypes(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest) (*operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mapper-types", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAliasMappers - Get mappers for identity provider
func (s *SDK) GetRealmIdentityProviderInstancesAliasMappers(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasMappersRequest) (*operations.GetRealmIdentityProviderInstancesAliasMappersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasMappersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.IdentityProviderMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IdentityProviderMapperRepresentations = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderInstancesAliasMappersID - Get mapper by id for the identity provider
func (s *SDK) GetRealmIdentityProviderInstancesAliasMappersID(ctx context.Context, request operations.GetRealmIdentityProviderInstancesAliasMappersIDRequest) (*operations.GetRealmIdentityProviderInstancesAliasMappersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderInstancesAliasMappersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IdentityProviderMapperRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IdentityProviderMapperRepresentation = out
		}
	}

	return res, nil
}

// GetRealmIdentityProviderProvidersProviderID - Get identity providers
func (s *SDK) GetRealmIdentityProviderProvidersProviderID(ctx context.Context, request operations.GetRealmIdentityProviderProvidersProviderIDRequest) (*operations.GetRealmIdentityProviderProvidersProviderIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/providers/{provider_id}", request.PathParams)

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

	res := &operations.GetRealmIdentityProviderProvidersProviderIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) GetRealmKeys(ctx context.Context, request operations.GetRealmKeysRequest) (*operations.GetRealmKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/keys", request.PathParams)

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

	res := &operations.GetRealmKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.KeysMetadataRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.KeysMetadataRepresentation = out
		}
	}

	return res, nil
}

// GetRealmRoles - Get all roles for the realm or client
func (s *SDK) GetRealmRoles(ctx context.Context, request operations.GetRealmRolesRequest) (*operations.GetRealmRolesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles", request.PathParams)

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

	res := &operations.GetRealmRolesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesByIDRoleID - Get a specific role’s representation
func (s *SDK) GetRealmRolesByIDRoleID(ctx context.Context, request operations.GetRealmRolesByIDRoleIDRequest) (*operations.GetRealmRolesByIDRoleIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}", request.PathParams)

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

	res := &operations.GetRealmRolesByIDRoleIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentation = out
		}
	}

	return res, nil
}

// GetRealmRolesByIDRoleIDComposites - Get role’s children   Returns a set of role’s children provided the role is a composite.
func (s *SDK) GetRealmRolesByIDRoleIDComposites(ctx context.Context, request operations.GetRealmRolesByIDRoleIDCompositesRequest) (*operations.GetRealmRolesByIDRoleIDCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/composites", request.PathParams)

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

	res := &operations.GetRealmRolesByIDRoleIDCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesByIDRoleIDCompositesClientsClient - Get client-level roles for the client that are in the role’s composite
func (s *SDK) GetRealmRolesByIDRoleIDCompositesClientsClient(ctx context.Context, request operations.GetRealmRolesByIDRoleIDCompositesClientsClientRequest) (*operations.GetRealmRolesByIDRoleIDCompositesClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/composites/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmRolesByIDRoleIDCompositesClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesByIDRoleIDCompositesRealm - Get realm-level roles that are in the role’s composite
func (s *SDK) GetRealmRolesByIDRoleIDCompositesRealm(ctx context.Context, request operations.GetRealmRolesByIDRoleIDCompositesRealmRequest) (*operations.GetRealmRolesByIDRoleIDCompositesRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/composites/realm", request.PathParams)

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

	res := &operations.GetRealmRolesByIDRoleIDCompositesRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesByIDRoleIDManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) GetRealmRolesByIDRoleIDManagementPermissions(ctx context.Context, request operations.GetRealmRolesByIDRoleIDManagementPermissionsRequest) (*operations.GetRealmRolesByIDRoleIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmRolesByIDRoleIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleName - Get a role by name
func (s *SDK) GetRealmRolesRoleName(ctx context.Context, request operations.GetRealmRolesRoleNameRequest) (*operations.GetRealmRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentation = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameComposites - Get composites of the role
func (s *SDK) GetRealmRolesRoleNameComposites(ctx context.Context, request operations.GetRealmRolesRoleNameCompositesRequest) (*operations.GetRealmRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/composites", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
func (s *SDK) GetRealmRolesRoleNameCompositesClientsClient(ctx context.Context, request operations.GetRealmRolesRoleNameCompositesClientsClientRequest) (*operations.GetRealmRolesRoleNameCompositesClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/composites/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameCompositesClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
func (s *SDK) GetRealmRolesRoleNameCompositesRealm(ctx context.Context, request operations.GetRealmRolesRoleNameCompositesRealmRequest) (*operations.GetRealmRolesRoleNameCompositesRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/composites/realm", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameCompositesRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameGroups - Return List of Groups that have the specified role name
func (s *SDK) GetRealmRolesRoleNameGroups(ctx context.Context, request operations.GetRealmRolesRoleNameGroupsRequest) (*operations.GetRealmRolesRoleNameGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/groups", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentations = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) GetRealmRolesRoleNameManagementPermissions(ctx context.Context, request operations.GetRealmRolesRoleNameManagementPermissionsRequest) (*operations.GetRealmRolesRoleNameManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/management/permissions", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// GetRealmRolesRoleNameUsers - Return List of Users that have the specified role name
func (s *SDK) GetRealmRolesRoleNameUsers(ctx context.Context, request operations.GetRealmRolesRoleNameUsersRequest) (*operations.GetRealmRolesRoleNameUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/users", request.PathParams)

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

	res := &operations.GetRealmRolesRoleNameUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUserStorageIDName - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
func (s *SDK) GetRealmUserStorageIDName(ctx context.Context, request operations.GetRealmUserStorageIDNameRequest) (*operations.GetRealmUserStorageIDNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/user-storage/{id}/name", request.PathParams)

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

	res := &operations.GetRealmUserStorageIDNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmUserStorageIDName2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmUsers - Get users   Returns a list of users, filtered according to query parameters
func (s *SDK) GetRealmUsers(ctx context.Context, request operations.GetRealmUsersRequest) (*operations.GetRealmUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users", request.PathParams)

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

	res := &operations.GetRealmUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersCount - Returns the number of users that match the given criteria.
func (s *SDK) GetRealmUsersCount(ctx context.Context, request operations.GetRealmUsersCountRequest) (*operations.GetRealmUsersCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/count", request.PathParams)

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

	res := &operations.GetRealmUsersCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *int32
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmUsersCount2XxApplicationJSONInt32Integer = out
		}
	}

	return res, nil
}

// GetRealmUsersID - Get representation of the user
func (s *SDK) GetRealmUsersID(ctx context.Context, request operations.GetRealmUsersIDRequest) (*operations.GetRealmUsersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}", request.PathParams)

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

	res := &operations.GetRealmUsersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserRepresentation = out
		}
	}

	return res, nil
}

// GetRealmUsersIDConfiguredUserStorageCredentialTypes - Return credential types, which are provided by the user storage where user is stored.
func (s *SDK) GetRealmUsersIDConfiguredUserStorageCredentialTypes(ctx context.Context, request operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesRequest) (*operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/configured-user-storage-credential-types", request.PathParams)

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

	res := &operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmUsersIDConfiguredUserStorageCredentialTypes2XxApplicationJSONStrings = out
		}
	}

	return res, nil
}

// GetRealmUsersIDConsents - Get consents granted by the user
func (s *SDK) GetRealmUsersIDConsents(ctx context.Context, request operations.GetRealmUsersIDConsentsRequest) (*operations.GetRealmUsersIDConsentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/consents", request.PathParams)

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

	res := &operations.GetRealmUsersIDConsentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmUsersIDConsents2XxApplicationJSONObjects = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmUsersIDCredentials(ctx context.Context, request operations.GetRealmUsersIDCredentialsRequest) (*operations.GetRealmUsersIDCredentialsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/credentials", request.PathParams)

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

	res := &operations.GetRealmUsersIDCredentialsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CredentialRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CredentialRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDFederatedIdentity - Get social logins associated with the user
func (s *SDK) GetRealmUsersIDFederatedIdentity(ctx context.Context, request operations.GetRealmUsersIDFederatedIdentityRequest) (*operations.GetRealmUsersIDFederatedIdentityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/federated-identity", request.PathParams)

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

	res := &operations.GetRealmUsersIDFederatedIdentityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.FederatedIdentityRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FederatedIdentityRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmUsersIDGroups(ctx context.Context, request operations.GetRealmUsersIDGroupsRequest) (*operations.GetRealmUsersIDGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/groups", request.PathParams)

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

	res := &operations.GetRealmUsersIDGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GroupRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GroupRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmUsersIDGroupsCount(ctx context.Context, request operations.GetRealmUsersIDGroupsCountRequest) (*operations.GetRealmUsersIDGroupsCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/groups/count", request.PathParams)

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

	res := &operations.GetRealmUsersIDGroupsCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmUsersIDGroupsCount2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetRealmUsersIDOfflineSessionsClientID - Get offline sessions associated with the user and client
func (s *SDK) GetRealmUsersIDOfflineSessionsClientID(ctx context.Context, request operations.GetRealmUsersIDOfflineSessionsClientIDRequest) (*operations.GetRealmUsersIDOfflineSessionsClientIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/offline-sessions/{clientId}", request.PathParams)

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

	res := &operations.GetRealmUsersIDOfflineSessionsClientIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserSessionRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserSessionRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappings - Get role mappings
func (s *SDK) GetRealmUsersIDRoleMappings(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRequest) (*operations.GetRealmUsersIDRoleMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
func (s *SDK) GetRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
func (s *SDK) GetRealmUsersIDRoleMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientAvailableRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
func (s *SDK) GetRealmUsersIDRoleMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientCompositeRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsRealm - Get realm-level role mappings
func (s *SDK) GetRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmRequest) (*operations.GetRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
func (s *SDK) GetRealmUsersIDRoleMappingsRealmAvailable(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmAvailableRequest) (*operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
func (s *SDK) GetRealmUsersIDRoleMappingsRealmComposite(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmCompositeRequest) (*operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDSessions - Get sessions associated with the user
func (s *SDK) GetRealmUsersIDSessions(ctx context.Context, request operations.GetRealmUsersIDSessionsRequest) (*operations.GetRealmUsersIDSessionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/sessions", request.PathParams)

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

	res := &operations.GetRealmUsersIDSessionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserSessionRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserSessionRepresentations = out
		}
	}

	return res, nil
}

func (s *SDK) GetRealmUsersManagementPermissions(ctx context.Context, request operations.GetRealmUsersManagementPermissionsRequest) (*operations.GetRealmUsersManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users-management-permissions", request.PathParams)

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

	res := &operations.GetRealmUsersManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// Post - Import a realm   Imports a realm from a full representation of that realm.
func (s *SDK) Post(ctx context.Context, request operations.PostRequest) (*operations.PostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/"

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

	res := &operations.PostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationExecutions - Add new authentication execution
func (s *SDK) PostRealmAuthenticationExecutions(ctx context.Context, request operations.PostRealmAuthenticationExecutionsRequest) (*operations.PostRealmAuthenticationExecutionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions", request.PathParams)

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

	res := &operations.PostRealmAuthenticationExecutionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationExecutionsExecutionIDConfig - Update execution with new configuration
func (s *SDK) PostRealmAuthenticationExecutionsExecutionIDConfig(ctx context.Context, request operations.PostRealmAuthenticationExecutionsExecutionIDConfigRequest) (*operations.PostRealmAuthenticationExecutionsExecutionIDConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions/{executionId}/config", request.PathParams)

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

	res := &operations.PostRealmAuthenticationExecutionsExecutionIDConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationExecutionsExecutionIDLowerPriority - Lower execution’s priority
func (s *SDK) PostRealmAuthenticationExecutionsExecutionIDLowerPriority(ctx context.Context, request operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityRequest) (*operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions/{executionId}/lower-priority", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationExecutionsExecutionIDRaisePriority - Raise execution’s priority
func (s *SDK) PostRealmAuthenticationExecutionsExecutionIDRaisePriority(ctx context.Context, request operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityRequest) (*operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/executions/{executionId}/raise-priority", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationFlows - Create a new authentication flow
func (s *SDK) PostRealmAuthenticationFlows(ctx context.Context, request operations.PostRealmAuthenticationFlowsRequest) (*operations.PostRealmAuthenticationFlowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows", request.PathParams)

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

	res := &operations.PostRealmAuthenticationFlowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationFlowsFlowAliasCopy - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
func (s *SDK) PostRealmAuthenticationFlowsFlowAliasCopy(ctx context.Context, request operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest) (*operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{flowAlias}/copy", request.PathParams)

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

	res := &operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationFlowsFlowAliasExecutionsExecution - Add new authentication execution to a flow
func (s *SDK) PostRealmAuthenticationFlowsFlowAliasExecutionsExecution(ctx context.Context, request operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest) (*operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/execution", request.PathParams)

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

	res := &operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationFlowsFlowAliasExecutionsFlow - Add new flow with new execution to existing flow
func (s *SDK) PostRealmAuthenticationFlowsFlowAliasExecutionsFlow(ctx context.Context, request operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest) (*operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/flow", request.PathParams)

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

	res := &operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationRegisterRequiredAction - Register a new required actions
func (s *SDK) PostRealmAuthenticationRegisterRequiredAction(ctx context.Context, request operations.PostRealmAuthenticationRegisterRequiredActionRequest) (*operations.PostRealmAuthenticationRegisterRequiredActionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/register-required-action", request.PathParams)

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

	res := &operations.PostRealmAuthenticationRegisterRequiredActionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationRequiredActionsAliasLowerPriority - Lower required action’s priority
func (s *SDK) PostRealmAuthenticationRequiredActionsAliasLowerPriority(ctx context.Context, request operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest) (*operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions/{alias}/lower-priority", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmAuthenticationRequiredActionsAliasRaisePriority - Raise required action’s priority
func (s *SDK) PostRealmAuthenticationRequiredActionsAliasRaisePriority(ctx context.Context, request operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest) (*operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions/{alias}/raise-priority", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClearKeysCache - Clear cache of external public keys (Public keys of clients or Identity providers)
func (s *SDK) PostRealmClearKeysCache(ctx context.Context, request operations.PostRealmClearKeysCacheRequest) (*operations.PostRealmClearKeysCacheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clear-keys-cache", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClearKeysCacheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClearRealmCache - Clear realm cache
func (s *SDK) PostRealmClearRealmCache(ctx context.Context, request operations.PostRealmClearRealmCacheRequest) (*operations.PostRealmClearRealmCacheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clear-realm-cache", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClearRealmCacheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClearUserCache - Clear user cache
func (s *SDK) PostRealmClearUserCache(ctx context.Context, request operations.PostRealmClearUserCacheRequest) (*operations.PostRealmClearUserCacheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clear-user-cache", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClearUserCacheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientDescriptionConverter - Base path for importing clients under this realm.
func (s *SDK) PostRealmClientDescriptionConverter(ctx context.Context, request operations.PostRealmClientDescriptionConverterRequest) (*operations.PostRealmClientDescriptionConverterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-description-converter", request.PathParams)

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

	res := &operations.PostRealmClientDescriptionConverterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClientRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientScopes - Create a new client scope   Client Scope’s name must be unique!
func (s *SDK) PostRealmClientScopes(ctx context.Context, request operations.PostRealmClientScopesRequest) (*operations.PostRealmClientScopesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes", request.PathParams)

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

	res := &operations.PostRealmClientScopesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientScopesIDProtocolMappersAddModels - Create multiple mappers
func (s *SDK) PostRealmClientScopesIDProtocolMappersAddModels(ctx context.Context, request operations.PostRealmClientScopesIDProtocolMappersAddModelsRequest) (*operations.PostRealmClientScopesIDProtocolMappersAddModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/add-models", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDProtocolMappersAddModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientScopesIDProtocolMappersModels - Create a mapper
func (s *SDK) PostRealmClientScopesIDProtocolMappersModels(ctx context.Context, request operations.PostRealmClientScopesIDProtocolMappersModelsRequest) (*operations.PostRealmClientScopesIDProtocolMappersModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDProtocolMappersModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientScopesIDScopeMappingsClientsClient - Add client-level roles to the client’s scope
func (s *SDK) PostRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.PostRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientScopesIDScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
func (s *SDK) PostRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.PostRealmClientScopesIDScopeMappingsRealmRequest) (*operations.PostRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClients - Create a new client   Client’s client_id must be unique!
func (s *SDK) PostRealmClients(ctx context.Context, request operations.PostRealmClientsRequest) (*operations.PostRealmClientsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients", request.PathParams)

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

	res := &operations.PostRealmClientsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
func (s *SDK) PostRealmClientsIDCertificatesAttrDownload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrDownloadRequest) (*operations.PostRealmClientsIDCertificatesAttrDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/download", request.PathParams)

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

	res := &operations.PostRealmClientsIDCertificatesAttrDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PostRealmClientsIDCertificatesAttrDownload2XxApplicationOctetStreamByteString = &out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrGenerate - Generate a new certificate with new key pair
func (s *SDK) PostRealmClientsIDCertificatesAttrGenerate(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrGenerateRequest) (*operations.PostRealmClientsIDCertificatesAttrGenerateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDCertificatesAttrGenerateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
func (s *SDK) PostRealmClientsIDCertificatesAttrGenerateAndDownload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadRequest) (*operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", request.PathParams)

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

	res := &operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PostRealmClientsIDCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString = &out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrUpload - Upload certificate and eventually private key
func (s *SDK) PostRealmClientsIDCertificatesAttrUpload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrUploadRequest) (*operations.PostRealmClientsIDCertificatesAttrUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDCertificatesAttrUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrUploadCertificate - Upload only certificate, not private key
func (s *SDK) PostRealmClientsIDCertificatesAttrUploadCertificate(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrUploadCertificateRequest) (*operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDClientSecret - Generate a new secret for the client
func (s *SDK) PostRealmClientsIDClientSecret(ctx context.Context, request operations.PostRealmClientsIDClientSecretRequest) (*operations.PostRealmClientsIDClientSecretResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/client-secret", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDClientSecretResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CredentialRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CredentialRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDNodes - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
func (s *SDK) PostRealmClientsIDNodes(ctx context.Context, request operations.PostRealmClientsIDNodesRequest) (*operations.PostRealmClientsIDNodesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/nodes", request.PathParams)

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

	res := &operations.PostRealmClientsIDNodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDProtocolMappersAddModels - Create multiple mappers
func (s *SDK) PostRealmClientsIDProtocolMappersAddModels(ctx context.Context, request operations.PostRealmClientsIDProtocolMappersAddModelsRequest) (*operations.PostRealmClientsIDProtocolMappersAddModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/protocol-mappers/add-models", request.PathParams)

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

	res := &operations.PostRealmClientsIDProtocolMappersAddModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDProtocolMappersModels - Create a mapper
func (s *SDK) PostRealmClientsIDProtocolMappersModels(ctx context.Context, request operations.PostRealmClientsIDProtocolMappersModelsRequest) (*operations.PostRealmClientsIDProtocolMappersModelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/protocol-mappers/models", request.PathParams)

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

	res := &operations.PostRealmClientsIDProtocolMappersModelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDPushRevocation - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
func (s *SDK) PostRealmClientsIDPushRevocation(ctx context.Context, request operations.PostRealmClientsIDPushRevocationRequest) (*operations.PostRealmClientsIDPushRevocationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/push-revocation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDPushRevocationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GlobalRequestResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GlobalRequestResult = out
		}
	}

	return res, nil
}

// PostRealmClientsIDRegistrationAccessToken - Generate a new registration access token for the client
func (s *SDK) PostRealmClientsIDRegistrationAccessToken(ctx context.Context, request operations.PostRealmClientsIDRegistrationAccessTokenRequest) (*operations.PostRealmClientsIDRegistrationAccessTokenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/registration-access-token", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmClientsIDRegistrationAccessTokenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClientRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDRoles - Create a new role for the realm or client
func (s *SDK) PostRealmClientsIDRoles(ctx context.Context, request operations.PostRealmClientsIDRolesRequest) (*operations.PostRealmClientsIDRolesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles", request.PathParams)

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

	res := &operations.PostRealmClientsIDRolesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDRolesRoleNameComposites - Add a composite to the role
func (s *SDK) PostRealmClientsIDRolesRoleNameComposites(ctx context.Context, request operations.PostRealmClientsIDRolesRoleNameCompositesRequest) (*operations.PostRealmClientsIDRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", request.PathParams)

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

	res := &operations.PostRealmClientsIDRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDScopeMappingsClientsClient - Add client-level roles to the client’s scope
func (s *SDK) PostRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.PostRealmClientsIDScopeMappingsClientsClientRequest) (*operations.PostRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmClientsIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
func (s *SDK) PostRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.PostRealmClientsIDScopeMappingsRealmRequest) (*operations.PostRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmClientsIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsInitialAccess - Create a new initial access token.
func (s *SDK) PostRealmClientsInitialAccess(ctx context.Context, request operations.PostRealmClientsInitialAccessRequest) (*operations.PostRealmClientsInitialAccessResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients-initial-access", request.PathParams)

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

	res := &operations.PostRealmClientsInitialAccessResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClientInitialAccessPresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClientInitialAccessPresentation = out
		}
	}

	return res, nil
}

func (s *SDK) PostRealmComponents(ctx context.Context, request operations.PostRealmComponentsRequest) (*operations.PostRealmComponentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components", request.PathParams)

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

	res := &operations.PostRealmComponentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmGroups - create or add a top level realm groupSet or create child.
func (s *SDK) PostRealmGroups(ctx context.Context, request operations.PostRealmGroupsRequest) (*operations.PostRealmGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups", request.PathParams)

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

	res := &operations.PostRealmGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmGroupsIDChildren - Set or create child.
func (s *SDK) PostRealmGroupsIDChildren(ctx context.Context, request operations.PostRealmGroupsIDChildrenRequest) (*operations.PostRealmGroupsIDChildrenResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/children", request.PathParams)

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

	res := &operations.PostRealmGroupsIDChildrenResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmGroupsIDRoleMappingsClientsClient - Add client-level roles to the user role mapping
func (s *SDK) PostRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.PostRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.PostRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmGroupsIDRoleMappingsRealm - Add realm-level role mappings to the user
func (s *SDK) PostRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.PostRealmGroupsIDRoleMappingsRealmRequest) (*operations.PostRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmGroupsIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmIdentityProviderImportConfig - Import identity provider from uploaded JSON file
func (s *SDK) PostRealmIdentityProviderImportConfig(ctx context.Context, request operations.PostRealmIdentityProviderImportConfigRequest) (*operations.PostRealmIdentityProviderImportConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/import-config", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmIdentityProviderImportConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostRealmIdentityProviderImportConfig2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostRealmIdentityProviderInstances - Create a new identity provider
func (s *SDK) PostRealmIdentityProviderInstances(ctx context.Context, request operations.PostRealmIdentityProviderInstancesRequest) (*operations.PostRealmIdentityProviderInstancesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances", request.PathParams)

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

	res := &operations.PostRealmIdentityProviderInstancesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmIdentityProviderInstancesAliasMappers - Add a mapper to identity provider
func (s *SDK) PostRealmIdentityProviderInstancesAliasMappers(ctx context.Context, request operations.PostRealmIdentityProviderInstancesAliasMappersRequest) (*operations.PostRealmIdentityProviderInstancesAliasMappersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", request.PathParams)

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

	res := &operations.PostRealmIdentityProviderInstancesAliasMappersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmLogoutAll - Removes all user sessions.
func (s *SDK) PostRealmLogoutAll(ctx context.Context, request operations.PostRealmLogoutAllRequest) (*operations.PostRealmLogoutAllResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/logout-all", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmLogoutAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmPartialImport - Partial import from a JSON file to an existing realm.
func (s *SDK) PostRealmPartialImport(ctx context.Context, request operations.PostRealmPartialImportRequest) (*operations.PostRealmPartialImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/partialImport", request.PathParams)

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

	res := &operations.PostRealmPartialImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmPartialExport - Partial export of existing realm into a JSON file.
func (s *SDK) PostRealmPartialExport(ctx context.Context, request operations.PostRealmPartialExportRequest) (*operations.PostRealmPartialExportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/partial-export", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmPartialExportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RealmRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RealmRepresentation = out
		}
	}

	return res, nil
}

// PostRealmPushRevocation - Push the realm’s revocation policy to any client that has an admin url associated with it.
func (s *SDK) PostRealmPushRevocation(ctx context.Context, request operations.PostRealmPushRevocationRequest) (*operations.PostRealmPushRevocationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/push-revocation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmPushRevocationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmRoles - Create a new role for the realm or client
func (s *SDK) PostRealmRoles(ctx context.Context, request operations.PostRealmRolesRequest) (*operations.PostRealmRolesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles", request.PathParams)

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

	res := &operations.PostRealmRolesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmRolesByIDRoleIDComposites - Make the role a composite role by associating some child roles
func (s *SDK) PostRealmRolesByIDRoleIDComposites(ctx context.Context, request operations.PostRealmRolesByIDRoleIDCompositesRequest) (*operations.PostRealmRolesByIDRoleIDCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/composites", request.PathParams)

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

	res := &operations.PostRealmRolesByIDRoleIDCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmRolesRoleNameComposites - Add a composite to the role
func (s *SDK) PostRealmRolesRoleNameComposites(ctx context.Context, request operations.PostRealmRolesRoleNameCompositesRequest) (*operations.PostRealmRolesRoleNameCompositesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/composites", request.PathParams)

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

	res := &operations.PostRealmRolesRoleNameCompositesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmTestLdapConnection - Test LDAP connection
func (s *SDK) PostRealmTestLdapConnection(ctx context.Context, request operations.PostRealmTestLdapConnectionRequest) (*operations.PostRealmTestLdapConnectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/testLDAPConnection", request.PathParams)

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

	res := &operations.PostRealmTestLdapConnectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PostRealmTestSMTPConnection(ctx context.Context, request operations.PostRealmTestSMTPConnectionRequest) (*operations.PostRealmTestSMTPConnectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/testSMTPConnection", request.PathParams)

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

	res := &operations.PostRealmTestSMTPConnectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUserStorageIDRemoveImportedUsers - Remove imported users
func (s *SDK) PostRealmUserStorageIDRemoveImportedUsers(ctx context.Context, request operations.PostRealmUserStorageIDRemoveImportedUsersRequest) (*operations.PostRealmUserStorageIDRemoveImportedUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/user-storage/{id}/remove-imported-users", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUserStorageIDRemoveImportedUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUserStorageIDSync - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
func (s *SDK) PostRealmUserStorageIDSync(ctx context.Context, request operations.PostRealmUserStorageIDSyncRequest) (*operations.PostRealmUserStorageIDSyncResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/user-storage/{id}/sync", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUserStorageIDSyncResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SynchronizationResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SynchronizationResult = out
		}
	}

	return res, nil
}

// PostRealmUserStorageIDUnlinkUsers - Unlink imported users from a storage provider
func (s *SDK) PostRealmUserStorageIDUnlinkUsers(ctx context.Context, request operations.PostRealmUserStorageIDUnlinkUsersRequest) (*operations.PostRealmUserStorageIDUnlinkUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/user-storage/{id}/unlink-users", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUserStorageIDUnlinkUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUserStorageParentIDMappersIDSync - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
func (s *SDK) PostRealmUserStorageParentIDMappersIDSync(ctx context.Context, request operations.PostRealmUserStorageParentIDMappersIDSyncRequest) (*operations.PostRealmUserStorageParentIDMappersIDSyncResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/user-storage/{parentId}/mappers/{id}/sync", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUserStorageParentIDMappersIDSyncResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SynchronizationResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SynchronizationResult = out
		}
	}

	return res, nil
}

// PostRealmUsers - Create a new user   Username must be unique.
func (s *SDK) PostRealmUsers(ctx context.Context, request operations.PostRealmUsersRequest) (*operations.PostRealmUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users", request.PathParams)

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

	res := &operations.PostRealmUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialID - Move a credential to a position behind another credential
func (s *SDK) PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialID(ctx context.Context, request operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDRequest) (*operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDCredentialsCredentialIDMoveToFirst - Move a credential to a first position in the credentials list of the user
func (s *SDK) PostRealmUsersIDCredentialsCredentialIDMoveToFirst(ctx context.Context, request operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstRequest) (*operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveToFirst", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDFederatedIdentityProvider - Add a social login provider to the user
func (s *SDK) PostRealmUsersIDFederatedIdentityProvider(ctx context.Context, request operations.PostRealmUsersIDFederatedIdentityProviderRequest) (*operations.PostRealmUsersIDFederatedIdentityProviderResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/federated-identity/{provider}", request.PathParams)

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

	res := &operations.PostRealmUsersIDFederatedIdentityProviderResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDImpersonation - Impersonate the user
func (s *SDK) PostRealmUsersIDImpersonation(ctx context.Context, request operations.PostRealmUsersIDImpersonationRequest) (*operations.PostRealmUsersIDImpersonationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/impersonation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUsersIDImpersonationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostRealmUsersIDImpersonation2XxApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostRealmUsersIDLogout - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
func (s *SDK) PostRealmUsersIDLogout(ctx context.Context, request operations.PostRealmUsersIDLogoutRequest) (*operations.PostRealmUsersIDLogoutResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/logout", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostRealmUsersIDLogoutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDRoleMappingsClientsClient - Add client-level roles to the user role mapping
func (s *SDK) PostRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.PostRealmUsersIDRoleMappingsClientsClientRequest) (*operations.PostRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDRoleMappingsRealm - Add realm-level role mappings to the user
func (s *SDK) PostRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.PostRealmUsersIDRoleMappingsRealmRequest) (*operations.PostRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmUsersIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealm - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
func (s *SDK) PutRealm(ctx context.Context, request operations.PutRealmRequest) (*operations.PutRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmAuthenticationConfigID - Update authenticator configuration
func (s *SDK) PutRealmAuthenticationConfigID(ctx context.Context, request operations.PutRealmAuthenticationConfigIDRequest) (*operations.PutRealmAuthenticationConfigIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/config/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmAuthenticationConfigIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmAuthenticationFlowsFlowAliasExecutions - Update authentication executions of a flow
func (s *SDK) PutRealmAuthenticationFlowsFlowAliasExecutions(ctx context.Context, request operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest) (*operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmAuthenticationFlowsID - Update an authentication flow
func (s *SDK) PutRealmAuthenticationFlowsID(ctx context.Context, request operations.PutRealmAuthenticationFlowsIDRequest) (*operations.PutRealmAuthenticationFlowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/flows/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmAuthenticationFlowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmAuthenticationRequiredActionsAlias - Update required action
func (s *SDK) PutRealmAuthenticationRequiredActionsAlias(ctx context.Context, request operations.PutRealmAuthenticationRequiredActionsAliasRequest) (*operations.PutRealmAuthenticationRequiredActionsAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/authentication/required-actions/{alias}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmAuthenticationRequiredActionsAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientScopesId1ProtocolMappersModelsId2 - Update the mapper
func (s *SDK) PutRealmClientScopesId1ProtocolMappersModelsId2(ctx context.Context, request operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request) (*operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientScopesID - Update the client scope
func (s *SDK) PutRealmClientScopesID(ctx context.Context, request operations.PutRealmClientScopesIDRequest) (*operations.PutRealmClientScopesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientScopesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientsId1ProtocolMappersModelsId2 - Update the mapper
func (s *SDK) PutRealmClientsId1ProtocolMappersModelsId2(ctx context.Context, request operations.PutRealmClientsId1ProtocolMappersModelsId2Request) (*operations.PutRealmClientsId1ProtocolMappersModelsId2Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientsId1ProtocolMappersModelsId2Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientsID - Update the client
func (s *SDK) PutRealmClientsID(ctx context.Context, request operations.PutRealmClientsIDRequest) (*operations.PutRealmClientsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmClientsIDDefaultClientScopesClientScopeID(ctx context.Context, request operations.PutRealmClientsIDDefaultClientScopesClientScopeIDRequest) (*operations.PutRealmClientsIDDefaultClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmClientsIDDefaultClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientsIDManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) PutRealmClientsIDManagementPermissions(ctx context.Context, request operations.PutRealmClientsIDManagementPermissionsRequest) (*operations.PutRealmClientsIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientsIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

func (s *SDK) PutRealmClientsIDOptionalClientScopesClientScopeID(ctx context.Context, request operations.PutRealmClientsIDOptionalClientScopesClientScopeIDRequest) (*operations.PutRealmClientsIDOptionalClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmClientsIDOptionalClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientsIDRolesRoleName - Update a role by name
func (s *SDK) PutRealmClientsIDRolesRoleName(ctx context.Context, request operations.PutRealmClientsIDRolesRoleNameRequest) (*operations.PutRealmClientsIDRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientsIDRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmClientsIDRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) PutRealmClientsIDRolesRoleNameManagementPermissions(ctx context.Context, request operations.PutRealmClientsIDRolesRoleNameManagementPermissionsRequest) (*operations.PutRealmClientsIDRolesRoleNameManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmClientsIDRolesRoleNameManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

func (s *SDK) PutRealmComponentsID(ctx context.Context, request operations.PutRealmComponentsIDRequest) (*operations.PutRealmComponentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/components/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmComponentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmDefaultDefaultClientScopesClientScopeID(ctx context.Context, request operations.PutRealmDefaultDefaultClientScopesClientScopeIDRequest) (*operations.PutRealmDefaultDefaultClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmDefaultDefaultClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmDefaultGroupsGroupID(ctx context.Context, request operations.PutRealmDefaultGroupsGroupIDRequest) (*operations.PutRealmDefaultGroupsGroupIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-groups/{groupId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmDefaultGroupsGroupIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmDefaultOptionalClientScopesClientScopeID(ctx context.Context, request operations.PutRealmDefaultOptionalClientScopesClientScopeIDRequest) (*operations.PutRealmDefaultOptionalClientScopesClientScopeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmDefaultOptionalClientScopesClientScopeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmEventsConfig - Update the events provider   Change the events provider and/or its configuration
func (s *SDK) PutRealmEventsConfig(ctx context.Context, request operations.PutRealmEventsConfigRequest) (*operations.PutRealmEventsConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/events/config", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmEventsConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmGroupsID - Update group, ignores subgroups.
func (s *SDK) PutRealmGroupsID(ctx context.Context, request operations.PutRealmGroupsIDRequest) (*operations.PutRealmGroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmGroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmGroupsIDManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) PutRealmGroupsIDManagementPermissions(ctx context.Context, request operations.PutRealmGroupsIDManagementPermissionsRequest) (*operations.PutRealmGroupsIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmGroupsIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// PutRealmIdentityProviderInstancesAlias - Update the identity provider
func (s *SDK) PutRealmIdentityProviderInstancesAlias(ctx context.Context, request operations.PutRealmIdentityProviderInstancesAliasRequest) (*operations.PutRealmIdentityProviderInstancesAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmIdentityProviderInstancesAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
func (s *SDK) PutRealmIdentityProviderInstancesAliasManagementPermissions(ctx context.Context, request operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest) (*operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// PutRealmIdentityProviderInstancesAliasMappersID - Update a mapper for the identity provider
func (s *SDK) PutRealmIdentityProviderInstancesAliasMappersID(ctx context.Context, request operations.PutRealmIdentityProviderInstancesAliasMappersIDRequest) (*operations.PutRealmIdentityProviderInstancesAliasMappersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmIdentityProviderInstancesAliasMappersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmRolesByIDRoleID - Update the role
func (s *SDK) PutRealmRolesByIDRoleID(ctx context.Context, request operations.PutRealmRolesByIDRoleIDRequest) (*operations.PutRealmRolesByIDRoleIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmRolesByIDRoleIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmRolesByIDRoleIDManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) PutRealmRolesByIDRoleIDManagementPermissions(ctx context.Context, request operations.PutRealmRolesByIDRoleIDManagementPermissionsRequest) (*operations.PutRealmRolesByIDRoleIDManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmRolesByIDRoleIDManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// PutRealmRolesRoleName - Update a role by name
func (s *SDK) PutRealmRolesRoleName(ctx context.Context, request operations.PutRealmRolesRoleNameRequest) (*operations.PutRealmRolesRoleNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmRolesRoleNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
func (s *SDK) PutRealmRolesRoleNameManagementPermissions(ctx context.Context, request operations.PutRealmRolesRoleNameManagementPermissionsRequest) (*operations.PutRealmRolesRoleNameManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/roles/{role-name}/management/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmRolesRoleNameManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}

// PutRealmUsersID - Update the user
func (s *SDK) PutRealmUsersID(ctx context.Context, request operations.PutRealmUsersIDRequest) (*operations.PutRealmUsersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmUsersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmUsersIDCredentialsCredentialIDUserLabel - Update a credential label for a user
func (s *SDK) PutRealmUsersIDCredentialsCredentialIDUserLabel(ctx context.Context, request operations.PutRealmUsersIDCredentialsCredentialIDUserLabelRequest) (*operations.PutRealmUsersIDCredentialsCredentialIDUserLabelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/credentials/{credentialId}/userLabel", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmUsersIDCredentialsCredentialIDUserLabelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmUsersIDDisableCredentialTypes - Disable all credentials for a user of a specific type
func (s *SDK) PutRealmUsersIDDisableCredentialTypes(ctx context.Context, request operations.PutRealmUsersIDDisableCredentialTypesRequest) (*operations.PutRealmUsersIDDisableCredentialTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/disable-credential-types", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmUsersIDDisableCredentialTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmUsersIDExecuteActionsEmail - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
func (s *SDK) PutRealmUsersIDExecuteActionsEmail(ctx context.Context, request operations.PutRealmUsersIDExecuteActionsEmailRequest) (*operations.PutRealmUsersIDExecuteActionsEmailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/execute-actions-email", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRealmUsersIDExecuteActionsEmailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmUsersIDGroupsGroupID(ctx context.Context, request operations.PutRealmUsersIDGroupsGroupIDRequest) (*operations.PutRealmUsersIDGroupsGroupIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/groups/{groupId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmUsersIDGroupsGroupIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmUsersIDResetPassword - Set up a new password for the user.
func (s *SDK) PutRealmUsersIDResetPassword(ctx context.Context, request operations.PutRealmUsersIDResetPasswordRequest) (*operations.PutRealmUsersIDResetPasswordResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/reset-password", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmUsersIDResetPasswordResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PutRealmUsersIDSendVerifyEmail - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
func (s *SDK) PutRealmUsersIDSendVerifyEmail(ctx context.Context, request operations.PutRealmUsersIDSendVerifyEmailRequest) (*operations.PutRealmUsersIDSendVerifyEmailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/send-verify-email", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutRealmUsersIDSendVerifyEmailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

func (s *SDK) PutRealmUsersManagementPermissions(ctx context.Context, request operations.PutRealmUsersManagementPermissionsRequest) (*operations.PutRealmUsersManagementPermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users-management-permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.PutRealmUsersManagementPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ManagementPermissionReference
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ManagementPermissionReference = out
		}
	}

	return res, nil
}
