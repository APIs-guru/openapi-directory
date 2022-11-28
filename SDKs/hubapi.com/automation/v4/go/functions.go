package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Functions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFunctions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Functions {
	return &Functions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive - Delete a custom action function
// Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
func (s *Functions) DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchive(ctx context.Context, request operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest) (*operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType - Delete a custom action function
// Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
func (s *Functions) DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionType(ctx context.Context, request operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest) (*operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID - Get a custom action function
// Returns the given function for a custom workflow action.
func (s *Functions) GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByID(ctx context.Context, request operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest) (*operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionFunction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionFunction = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType - Get a custom action function
// Returns the given function for a custom workflow action.
func (s *Functions) GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionType(ctx context.Context, request operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest) (*operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionFunction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionFunction = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage - Get all custom action functions
// Returns a list of all functions that are associated with the given custom workflow action.
func (s *Functions) GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPage(ctx context.Context, request operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest) (*operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CollectionResponseActionFunctionIdentifierNoPaging
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CollectionResponseActionFunctionIdentifierNoPaging = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace - Create or replace a custom action function
// Creates or replaces a function for a custom workflow action.
func (s *Functions) PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplace(ctx context.Context, request operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest) (*operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionFunctionIdentifier
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionFunctionIdentifier = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType - Create or replace a custom action function
// Creates or replaces a function for a custom workflow action.
func (s *Functions) PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionType(ctx context.Context, request operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest) (*operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionFunctionIdentifier
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionFunctionIdentifier = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
