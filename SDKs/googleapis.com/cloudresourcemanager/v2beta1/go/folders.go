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

type Folders struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFolders(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Folders {
	return &Folders{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CloudresourcemanagerFoldersCreate - Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will be populated with the created Folder. In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name must be distinct from all other Folders that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 10. Note, the full active + deleted Folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not cause the total number of Folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the CreateFolder request, with status code FAILED_PRECONDITION and an error description. Other folder constraint violations will be communicated in the Operation, with the specific PreconditionFailure returned via the details list in the Operation.error field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
func (s *Folders) CloudresourcemanagerFoldersCreate(ctx context.Context, request operations.CloudresourcemanagerFoldersCreateRequest) (*operations.CloudresourcemanagerFoldersCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/folders"

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

	res := &operations.CloudresourcemanagerFoldersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersDelete - Requests deletion of a Folder. The Folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty Folder in the ACTIVE state, where a Folder is empty if it doesn't contain any Folders or Projects in the ACTIVE state. The caller must have `resourcemanager.folders.delete` permission on the identified folder.
func (s *Folders) CloudresourcemanagerFoldersDelete(ctx context.Context, request operations.CloudresourcemanagerFoldersDeleteRequest) (*operations.CloudresourcemanagerFoldersDeleteResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Folder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Folder = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersGet - Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.
func (s *Folders) CloudresourcemanagerFoldersGet(ctx context.Context, request operations.CloudresourcemanagerFoldersGetRequest) (*operations.CloudresourcemanagerFoldersGetResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Folder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Folder = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersGetIamPolicy - Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
func (s *Folders) CloudresourcemanagerFoldersGetIamPolicy(ctx context.Context, request operations.CloudresourcemanagerFoldersGetIamPolicyRequest) (*operations.CloudresourcemanagerFoldersGetIamPolicyResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersGetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersList - Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
func (s *Folders) CloudresourcemanagerFoldersList(ctx context.Context, request operations.CloudresourcemanagerFoldersListRequest) (*operations.CloudresourcemanagerFoldersListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/folders"

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

	res := &operations.CloudresourcemanagerFoldersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListFoldersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFoldersResponse = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersMove - Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the Operation.error field. In addition, the Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
func (s *Folders) CloudresourcemanagerFoldersMove(ctx context.Context, request operations.CloudresourcemanagerFoldersMoveRequest) (*operations.CloudresourcemanagerFoldersMoveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:move", request.PathParams)

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

	res := &operations.CloudresourcemanagerFoldersMoveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersPatch - Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described in the CreateFolder documentation. The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.
func (s *Folders) CloudresourcemanagerFoldersPatch(ctx context.Context, request operations.CloudresourcemanagerFoldersPatchRequest) (*operations.CloudresourcemanagerFoldersPatchResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Folder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Folder = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersSearch - Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
func (s *Folders) CloudresourcemanagerFoldersSearch(ctx context.Context, request operations.CloudresourcemanagerFoldersSearchRequest) (*operations.CloudresourcemanagerFoldersSearchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/folders:search"

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

	res := &operations.CloudresourcemanagerFoldersSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchFoldersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchFoldersResponse = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersSetIamPolicy - Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.
func (s *Folders) CloudresourcemanagerFoldersSetIamPolicy(ctx context.Context, request operations.CloudresourcemanagerFoldersSetIamPolicyRequest) (*operations.CloudresourcemanagerFoldersSetIamPolicyResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersSetIamPolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Policy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Policy = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersTestIamPermissions - Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234". There are no permissions required for making this API call.
func (s *Folders) CloudresourcemanagerFoldersTestIamPermissions(ctx context.Context, request operations.CloudresourcemanagerFoldersTestIamPermissionsRequest) (*operations.CloudresourcemanagerFoldersTestIamPermissionsResponse, error) {
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

	res := &operations.CloudresourcemanagerFoldersTestIamPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TestIamPermissionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TestIamPermissionsResponse = out
		}
	}

	return res, nil
}

// CloudresourcemanagerFoldersUndelete - Cancels the deletion request for a Folder. This method may only be called on a Folder in the DELETE_REQUESTED state. In order to succeed, the Folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.
func (s *Folders) CloudresourcemanagerFoldersUndelete(ctx context.Context, request operations.CloudresourcemanagerFoldersUndeleteRequest) (*operations.CloudresourcemanagerFoldersUndeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/{name}:undelete", request.PathParams)

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

	res := &operations.CloudresourcemanagerFoldersUndeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Folder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Folder = out
		}
	}

	return res, nil
}
