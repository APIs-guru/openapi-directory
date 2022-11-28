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

type Revisions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRevisions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Revisions {
	return &Revisions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID - Get a revision for a custom action
// Returns the given version of a custom workflow action.
func (s *Revisions) GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByID(ctx context.Context, request operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest) (*operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", request.PathParams)

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

	res := &operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionRevision
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionRevision = out
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

// GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage - Get all revisions for a custom action
// Returns a list of revisions for a custom workflow action.
func (s *Revisions) GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPage(ctx context.Context, request operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest) (*operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions", request.PathParams)

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

	res := &operations.GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CollectionResponseActionRevisionForwardPaging
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CollectionResponseActionRevisionForwardPaging = out
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
