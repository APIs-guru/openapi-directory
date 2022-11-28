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

type Labels struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLabels(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Labels {
	return &Labels{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DrivelabelsLabelsCreate - Creates a new Label.
func (s *Labels) DrivelabelsLabelsCreate(ctx context.Context, request operations.DrivelabelsLabelsCreateRequest) (*operations.DrivelabelsLabelsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2beta/labels"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabel = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsDelta - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
func (s *Labels) DrivelabelsLabelsDelta(ctx context.Context, request operations.DrivelabelsLabelsDeltaRequest) (*operations.DrivelabelsLabelsDeltaResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}:delta", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsDeltaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsDisable - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
func (s *Labels) DrivelabelsLabelsDisable(ctx context.Context, request operations.DrivelabelsLabelsDisableRequest) (*operations.DrivelabelsLabelsDisableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}:disable", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsDisableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabel = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsEnable - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
func (s *Labels) DrivelabelsLabelsEnable(ctx context.Context, request operations.DrivelabelsLabelsEnableRequest) (*operations.DrivelabelsLabelsEnableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}:enable", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsEnableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabel = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsList - List labels.
func (s *Labels) DrivelabelsLabelsList(ctx context.Context, request operations.DrivelabelsLabelsListRequest) (*operations.DrivelabelsLabelsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2beta/labels"

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

	res := &operations.DrivelabelsLabelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaListLabelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaListLabelsResponse = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsPublish - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
func (s *Labels) DrivelabelsLabelsPublish(ctx context.Context, request operations.DrivelabelsLabelsPublishRequest) (*operations.DrivelabelsLabelsPublishResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}:publish", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsPublishResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabel = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsRevisionsLocksList - Lists the LabelLocks on a Label.
func (s *Labels) DrivelabelsLabelsRevisionsLocksList(ctx context.Context, request operations.DrivelabelsLabelsRevisionsLocksListRequest) (*operations.DrivelabelsLabelsRevisionsLocksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/locks", request.PathParams)

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

	res := &operations.DrivelabelsLabelsRevisionsLocksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaListLabelLocksResponse = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsRevisionsPermissionsBatchDelete - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
func (s *Labels) DrivelabelsLabelsRevisionsPermissionsBatchDelete(ctx context.Context, request operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest) (*operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/permissions:batchDelete", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse{
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

// DrivelabelsLabelsRevisionsPermissionsBatchUpdate - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
func (s *Labels) DrivelabelsLabelsRevisionsPermissionsBatchUpdate(ctx context.Context, request operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest) (*operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/permissions:batchUpdate", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsRevisionsPermissionsCreate - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
func (s *Labels) DrivelabelsLabelsRevisionsPermissionsCreate(ctx context.Context, request operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest) (*operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/permissions", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabelPermission
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabelPermission = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsRevisionsPermissionsDelete - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
func (s *Labels) DrivelabelsLabelsRevisionsPermissionsDelete(ctx context.Context, request operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest) (*operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse{
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

// DrivelabelsLabelsRevisionsPermissionsList - Lists a Label's permissions.
func (s *Labels) DrivelabelsLabelsRevisionsPermissionsList(ctx context.Context, request operations.DrivelabelsLabelsRevisionsPermissionsListRequest) (*operations.DrivelabelsLabelsRevisionsPermissionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/permissions", request.PathParams)

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

	res := &operations.DrivelabelsLabelsRevisionsPermissionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsRevisionsUpdatePermissions - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
func (s *Labels) DrivelabelsLabelsRevisionsUpdatePermissions(ctx context.Context, request operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest) (*operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{parent}/permissions", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabelPermission
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabelPermission = out
		}
	}

	return res, nil
}

// DrivelabelsLabelsUpdateLabelCopyMode - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
func (s *Labels) DrivelabelsLabelsUpdateLabelCopyMode(ctx context.Context, request operations.DrivelabelsLabelsUpdateLabelCopyModeRequest) (*operations.DrivelabelsLabelsUpdateLabelCopyModeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta/{name}:updateLabelCopyMode", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DrivelabelsLabelsUpdateLabelCopyModeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAppsDriveLabelsV2betaLabel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAppsDriveLabelsV2betaLabel = out
		}
	}

	return res, nil
}
