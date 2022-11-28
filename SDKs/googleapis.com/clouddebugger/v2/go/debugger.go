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

type Debugger struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDebugger(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Debugger {
	return &Debugger{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ClouddebuggerDebuggerDebuggeesBreakpointsDelete - Deletes the breakpoint from the debuggee.
func (s *Debugger) ClouddebuggerDebuggerDebuggeesBreakpointsDelete(ctx context.Context, request operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest) (*operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.PathParams)

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

	res := &operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse{
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

			res.Empty = out
		}
	}

	return res, nil
}

// ClouddebuggerDebuggerDebuggeesBreakpointsGet - Gets breakpoint information.
func (s *Debugger) ClouddebuggerDebuggerDebuggeesBreakpointsGet(ctx context.Context, request operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest) (*operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}", request.PathParams)

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

	res := &operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetBreakpointResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBreakpointResponse = out
		}
	}

	return res, nil
}

// ClouddebuggerDebuggerDebuggeesBreakpointsList - Lists all breakpoints for the debuggee.
func (s *Debugger) ClouddebuggerDebuggerDebuggeesBreakpointsList(ctx context.Context, request operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest) (*operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints", request.PathParams)

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

	res := &operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBreakpointsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBreakpointsResponse = out
		}
	}

	return res, nil
}

// ClouddebuggerDebuggerDebuggeesBreakpointsSet - Sets the breakpoint to the debuggee.
func (s *Debugger) ClouddebuggerDebuggerDebuggeesBreakpointsSet(ctx context.Context, request operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest) (*operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/debugger/debuggees/{debuggeeId}/breakpoints/set", request.PathParams)

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

	res := &operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SetBreakpointResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SetBreakpointResponse = out
		}
	}

	return res, nil
}

// ClouddebuggerDebuggerDebuggeesList - Lists all the debuggees that the user has access to.
func (s *Debugger) ClouddebuggerDebuggerDebuggeesList(ctx context.Context, request operations.ClouddebuggerDebuggerDebuggeesListRequest) (*operations.ClouddebuggerDebuggerDebuggeesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/debugger/debuggees"

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

	res := &operations.ClouddebuggerDebuggerDebuggeesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListDebuggeesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDebuggeesResponse = out
		}
	}

	return res, nil
}
