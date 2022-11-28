package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var ServerList = []string{
	"https://test-api.osf.io/v2",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
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

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// UsersAddonAccountsList - List all addon accounts
//
// A paginated list of addon accounts authorized by this user.
//
// #### Permissions
//
// Addon accounts are visible only to the user that authorized the account.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) UsersAddonAccountsList(ctx context.Context, request operations.UsersAddonAccountsListRequest) (*operations.UsersAddonAccountsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/addons/{provider}/accounts/", request.PathParams)

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

	res := &operations.UsersAddonAccountsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersAddonAccountsRead - Retrieve an addon account
// Retrieves the details of an addon account
//
// #### Permissions
//
// Addon accounts are visible only to the user that authorized the account.
//
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) UsersAddonAccountsRead(ctx context.Context, request operations.UsersAddonAccountsReadRequest) (*operations.UsersAddonAccountsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/addons/{provider}/accounts/{account_id}/", request.PathParams)

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

	res := &operations.UsersAddonAccountsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// AddonsList - List all addons
//
// A paginated list of addons configurable with the OSF
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
func (s *SDK) AddonsList(ctx context.Context) (*operations.AddonsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/addons/"

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

	res := &operations.AddonsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// BaseRead - Root
// Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).
//
// #### Returns
// A JSON object with `meta` and `links` keys.
//
// The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.
//
// The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [metaschemas](#tag/Metaschemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)
func (s *SDK) BaseRead(ctx context.Context) (*operations.BaseReadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/"

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

	res := &operations.BaseReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CitationsStylesList - List all citation styles
//
// A paginated list of all standard citation styles available for rendering citations.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.
//
// Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
func (s *SDK) CitationsStylesList(ctx context.Context) (*operations.CitationsStylesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/citations/styles/"

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

	res := &operations.CitationsStylesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// CitationsStylesRead - Retrieve a citation style
// Retrieves the details of a citation style.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) CitationsStylesRead(ctx context.Context, request operations.CitationsStylesReadRequest) (*operations.CitationsStylesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/citations/styles/{style_id}/", request.PathParams)

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

	res := &operations.CitationsStylesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// CollectionsAddMetadata - Add Metadata or Subjects to a Entitiy in a Collection
// List of user created metadata for entities within a collection.
// #### Permissions
// To edit this collection a user must have collections write permissions
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsAddMetadata(ctx context.Context, request operations.CollectionsAddMetadataRequest) (*operations.CollectionsAddMetadataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsAddMetadataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsCollectedMetadata - Retrieve subject data for a specific piece of metadata info for a collection
//
// #### Permissions
// In order to view these subject it must be a public collection or a user must have read permissions for collection.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsCollectedMetadata(ctx context.Context, request operations.CollectionsCollectedMetadataRequest) (*operations.CollectionsCollectedMetadataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", request.PathParams)

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

	res := &operations.CollectionsCollectedMetadataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsCreate - Create a Collection
// Retrieves a list collections, either public or related to the user
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
//
// Comments on private nodes are only visible to contributors and administrators on the parent node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsCreate(ctx context.Context, request operations.CollectionsCreateRequest) (*operations.CollectionsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/collections/"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsDelete - Delete a Collection
// Deletes a collection, if the user has appropriate permissions.
// #### Permissions
// Users must have write permissions on a collection in order to delete it
// #### Returns
// Nothing is returned in the body
func (s *SDK) CollectionsDelete(ctx context.Context, request operations.CollectionsDeleteRequest) (*operations.CollectionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.CollectionsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CollectionsDetail - Retrieve a Collection
// Retrieves a collection, if the user has appropriate permissions.
//
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsDetail(ctx context.Context, request operations.CollectionsDetailRequest) (*operations.CollectionsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/", request.PathParams)

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

	res := &operations.CollectionsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// CollectionsLinkedNodesList - List All Linked Nodes for a Collection
// List of all nodes linked to the given collection.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedNodesList(ctx context.Context, request operations.CollectionsLinkedNodesListRequest) (*operations.CollectionsLinkedNodesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes", request.PathParams)

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

	res := &operations.CollectionsLinkedNodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationships - Link Nodes to Collection
// This endpoint allow users to a add a node to a collection by issuing a POST request.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedNodesRelationships(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsRequest) (*operations.CollectionsLinkedNodesRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationshipsCreate - Give a Sparse List of Node Ids
// List of all the node ids linked to the given collection.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedNodesRelationshipsCreate(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsCreateRequest) (*operations.CollectionsLinkedNodesRelationshipsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

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

	res := &operations.CollectionsLinkedNodesRelationshipsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationshipsDelete - Remove Nodes From Collection
//
// This removes associated nodes from a collection
// #### Permissions
// Any user with write permissions on this collection should be to remove nodes from this collection.
// #### Returns
// Nothing in the response body.
func (s *SDK) CollectionsLinkedNodesRelationshipsDelete(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsDeleteRequest) (*operations.CollectionsLinkedNodesRelationshipsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesRelationshipsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedPreprintsList - List All Linked Preprints for a Collection
// List of all preprints linked to the given collection.
// #### Permissions
// This returns all public preprints associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedPreprintsList(ctx context.Context, request operations.CollectionsLinkedPreprintsListRequest) (*operations.CollectionsLinkedPreprintsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_preprints/", request.PathParams)

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

	res := &operations.CollectionsLinkedPreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsList - List All Linked Registrations for a Collection
// List of all registrations linked to the given collection.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedRegistrationsList(ctx context.Context, request operations.CollectionsLinkedRegistrationsListRequest) (*operations.CollectionsLinkedRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/", request.PathParams)

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

	res := &operations.CollectionsLinkedRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationships - Link Registrations to Collection
// This endpoint allow users to a add a registration to a collection by issuing a POST request.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedRegistrationsRelationships(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationshipsCreate - Give a Sparse List of Registrations Ids
// List of all the registration ids linked to the given collection.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsLinkedRegistrationsRelationshipsCreate(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

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

	res := &operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationshipsDelete - Remove Registrations From Collection
//
// This removes associated registrations from a collection
// #### Permissions
// Any user with write permissions on this collection should be to remove registrations from this collection.
// #### Returns
// Nothing in the response body.
func (s *SDK) CollectionsLinkedRegistrationsRelationshipsDelete(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsList - List all Collections
// Retrieves a list collections, either public or related to the user
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
//
// Comments on private nodes are only visible to contributors and administrators on the parent node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsList(ctx context.Context) (*operations.CollectionsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/collections/"

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

	res := &operations.CollectionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// CollectionsMetadataDelete - Delete Collection Metadata from entitiy
//
// #### Permissions
// Only a user with collection admin permissions can delete collected metadata
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataDelete(ctx context.Context, request operations.CollectionsMetadataDeleteRequest) (*operations.CollectionsMetadataDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.CollectionsMetadataDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CollectionsMetadataDetail - Add Metadata or Subjects to an Entity in a Collection
// List of user created metadata for entities within a collection.
// #### Permissions
// To edit this collection a user must have collections write permissions
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataDetail(ctx context.Context, request operations.CollectionsMetadataDetailRequest) (*operations.CollectionsMetadataDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsMetadataRegistrationsDetail - Retrieve Specific Metadata for a Collection
//
// #### Permissions
// In order to view this metadata it must be public or a user must have read permissions for collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataRegistrationsDetail(ctx context.Context, request operations.CollectionsMetadataRegistrationsDetailRequest) (*operations.CollectionsMetadataRegistrationsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

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

	res := &operations.CollectionsMetadataRegistrationsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataRegistrationsList - Retrieve a list of collected metadata for a collection
// List of user created metadata for entities within a collection.
// #### Permissions
// In order to view this metadata it must be public or a user must have read permissions for collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataRegistrationsList(ctx context.Context, request operations.CollectionsMetadataRegistrationsListRequest) (*operations.CollectionsMetadataRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/", request.PathParams)

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

	res := &operations.CollectionsMetadataRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataSubjectsRelationships - Retrieve subject metadata for a specific piece of metadata in a collection
//
// #### Permissions
// This is public for a logged out user when an entity is public.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataSubjectsRelationships(ctx context.Context, request operations.CollectionsMetadataSubjectsRelationshipsRequest) (*operations.CollectionsMetadataSubjectsRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.PathParams)

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

	res := &operations.CollectionsMetadataSubjectsRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataSubjectsRelationshipsUpdate - Update subjects for a specific piece of metadata in a collection
//
// #### Permissions
// This is editable for a user with a write permission for this collection.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) CollectionsMetadataSubjectsRelationshipsUpdate(ctx context.Context, request operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest) (*operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CommentsDelete - Delete a comment
// Deletes a comment. This action can be undone by setting deleted to False in a comment update request.
// #### Returns
// If the request is successful, no content is returned.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) CommentsDelete(ctx context.Context, request operations.CommentsDeleteRequest) (*operations.CommentsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{comment_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.CommentsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CommentsPut - Update a comment
// Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
// #### Returns
// Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.
//
// If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) CommentsPut(ctx context.Context, request operations.CommentsPutRequest) (*operations.CommentsPutResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{comment_id}/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CommentsPutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CommentsRead - Retrieve a comment
// Retrieves the details of a comment
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) CommentsRead(ctx context.Context, request operations.CommentsReadRequest) (*operations.CommentsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/comments/{comment_id}/", request.PathParams)

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

	res := &operations.CommentsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// FilesDetail - Retrieve a file
// Retrieves the details of a file (or folder)
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// ###Waterbutler API actions
//
// Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).
//
// #### Download (files)
//
// To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.
//
// #### Create Subfolder (folders)
//
// You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.
//
// #### Upload New File (folders)
//
//	To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.
//
// #### Update Existing File (file)
//
// To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.
//
// #### Rename (files, folders)
//
// To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.
//
// #### Move & Copy (files, folders)
//
// Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
// Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
// If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.
//
// #### Delete (file, folders)
//
// To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.
func (s *SDK) FilesDetail(ctx context.Context, request operations.FilesDetailRequest) (*operations.FilesDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/files/{file_id}/", request.PathParams)

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

	res := &operations.FilesDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// FilesPatch - Update a file
// Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
// #### Returns
// Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.
//
// If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) FilesPatch(ctx context.Context, request operations.FilesPatchRequest) (*operations.FilesPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/files/{file_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.FilesPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// FilesVersionDetail - Retrieve a file version
// Retrieves the details of a file version
// #### Returns
//
// Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) FilesVersionDetail(ctx context.Context, request operations.FilesVersionDetailRequest) (*operations.FilesVersionDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/files/{file_id}/versions/{version_id}/", request.PathParams)

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

	res := &operations.FilesVersionDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// FilesVersions - List all file versions
//
// A paginated list of all file versions.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) FilesVersions(ctx context.Context, request operations.FilesVersionsRequest) (*operations.FilesVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/files/{file_id}/versions/", request.PathParams)

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

	res := &operations.FilesVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// InstitutionsDetail - Retrieve an institution
// Retrieves the details of an institution
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) InstitutionsDetail(ctx context.Context, request operations.InstitutionsDetailRequest) (*operations.InstitutionsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/", request.PathParams)

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

	res := &operations.InstitutionsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// InstitutionsList - List all institutions
//
// A paginated list of all verified institutions.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.
//
// Institutions may be filtered by their `id`, `name`, and `auth_url`
func (s *SDK) InstitutionsList(ctx context.Context) (*operations.InstitutionsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/institutions/"

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

	res := &operations.InstitutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// InstitutionsNodeList - List all affiliated nodes
// A paginated list of all nodes affiliated with an institution.
// #### Versioning
// As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.
//
// Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
func (s *SDK) InstitutionsNodeList(ctx context.Context, request operations.InstitutionsNodeListRequest) (*operations.InstitutionsNodeListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/nodes/", request.PathParams)

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

	res := &operations.InstitutionsNodeListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// InstitutionsRegistrationList - List all affiliated registrations
// A paginated list of all registrations affiliated with an institution.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.
//
// Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
func (s *SDK) InstitutionsRegistrationList(ctx context.Context, request operations.InstitutionsRegistrationListRequest) (*operations.InstitutionsRegistrationListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/registrations/", request.PathParams)

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

	res := &operations.InstitutionsRegistrationListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// InstitutionsUsersList - List all affiliated users
// A paginated list of all users affiliated with an institution.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 users. Each resource in the array is a separate users object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.
//
// Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`
func (s *SDK) InstitutionsUsersList(ctx context.Context, request operations.InstitutionsUsersListRequest) (*operations.InstitutionsUsersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/institutions/{institution_id}/users/", request.PathParams)

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

	res := &operations.InstitutionsUsersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// LicenseList - List all licenses
// A paginated list of licenses. The returned licenses are sorted by their name.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
// The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).
//
// Licenses may be filtered by their `id`, and `name`.
func (s *SDK) LicenseList(ctx context.Context) (*operations.LicenseListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/licenses/"

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

	res := &operations.LicenseListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// LicensesRead - Retrieve a license
// Retrieves the details of a license.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) LicensesRead(ctx context.Context, request operations.LicensesReadRequest) (*operations.LicensesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/license/{license_id}/", request.PathParams)

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

	res := &operations.LicensesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// LogsActions - Actions
//
// A log can have one of many actions. The complete list of loggable actions (in the format {identifier}: {description}) is as follows:
// * `project_created`: A Node is created
// * `project_registered`: A Node is registered
// * `project_deleted`: A Node is deleted
// * `created_from`: A Node is created using an existing Node as a template
// * `pointer_created`: A Pointer is created
// * `pointer_forked`: A Pointer is forked
// * `pointer_removed`: A Pointer is removed
// * `node_removed`: A component is deleted
// * `node_forked`: A Node is forked
// ---
// * `made_public`: A Node is made public
// * `made_private`: A Node is made private
// * `tag_added`: A tag is added to a Node
// * `tag_removed`: A tag is removed from a Node
// * `edit_title`: A Node's title is changed
// * `edit_description`: A Node's description is changed
// * `updated_fields`: One or more of a Node's fields are changed
// * `external_ids_added`: An external identifier is added to a Node (e.g. DOI, ARK)
// * `view_only_link_added`: A view-only link was added to a Node
// * `view_only_link_removed`:  A view-only link was removed from a Node
// ---
// * `contributor_added`: A Contributor is added to a Node
// * `contributor_removed`: A Contributor is removed from a Node
// * `contributors_reordered`: A Contributor's position in a Node's bibliography is changed
// * `permissions_updated`: A Contributor`s permissions on a Node are changed
// * `made_contributor_visible`: A Contributor is made bibliographically visible on a Node
// * `made_contributor_invisible`: A Contributor is made bibliographically invisible on a Node
// ---
// * `wiki_updated`: A Node's wiki is updated
// * `wiki_deleted`: A Node's wiki is deleted
// * `wiki_renamed`: A Node's wiki is renamed
// * `made_wiki_public`: A Node's wiki is made public
// * `made_wiki_private`: A Node's wiki is made private
// ---
// * `addon_added`: An add-on is linked to a Node
// * `addon_removed`: An add-on is unlinked from a Node
// * `addon_file_moved`: A File in a Node's linked add-on is moved
// * `addon_file_copied`: A File in a Node's linked add-on is copied
// * `addon_file_renamed`: A File in a Node's linked add-on is renamed
// * `node_authorized`: An addon is authorized for a project
// * `node_deauthorized`: An addon is deauthorized for a project
// * `folder_created`: A Folder is created in a Node's linked add-on
// * `file_added`: A File is added to a Node's linked add-on
// * `file_updated`: A File is updated on a Node's linked add-on
// * `file_removed`: A File is removed from a Node's linked add-on
// * `file_restored`: A File is restored in a Node's linked add-on
// ---
// * `comment_added`: A Comment is added to some item
// * `comment_removed`: A Comment is removed from some item
// * `comment_updated`: A Comment is updated on some item
// ---
// * `embargo_initiated`: An embargoed Registration is proposed on a Node
// * `embargo_approved`: A proposed Embargo of a Node is approved
// * `embargo_cancelled`: A proposed Embargo of a Node is cancelled
// * `embargo_completed`: A proposed Embargo of a Node is completed
// * `retraction_initiated`: A Withdrawal of a Registration is proposed
// * `retraction_approved`: A Withdrawal of a Registration is approved
// * `retraction_cancelled`: A Withdrawal of a Registration is cancelled
// * `registration_initiated`: A Registration of a Node is proposed
// * `registration_approved`: A proposed Registration is approved
// * `registration_cancelled`: A proposed Registration is cancelled
func (s *SDK) LogsActions(ctx context.Context) (*operations.LogsActionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/actions/"

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

	res := &operations.LogsActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// LogsRead - Retrieve a log
// Retrieves the details of a log.
// A log is permanent immutable record of a node's history. A log is created when a user performs one of many actions. See the [actions](#Logs_logs_actions) section for more details.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) LogsRead(ctx context.Context, request operations.LogsReadRequest) (*operations.LogsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/logs/{log_id}/", request.PathParams)

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

	res := &operations.LogsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// MetaschemasList - List all metaschemas
//
// A paginated list of all active metaschemas.
// Metaschemas describe the supplemental questions that accompany a registration.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
func (s *SDK) MetaschemasList(ctx context.Context) (*operations.MetaschemasListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metaschemas/"

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

	res := &operations.MetaschemasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// MetaschemasRead - Retrieve a metaschema
// Retrieves the details of a given metaschema.
//
// Metaschemas describe the supplemental questions that accompany a registration.
//
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) MetaschemasRead(ctx context.Context, request operations.MetaschemasReadRequest) (*operations.MetaschemasReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metaschemas/{metaschema_id}", request.PathParams)

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

	res := &operations.MetaschemasReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesAddonRead - Retrieve an addon
// Retrieve details of an individual addon connected to this node.
// #### Permissions
// NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
// Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.
// #### Returns
// Returns a JSON object with a `data` key containing the details of the requested addon, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesAddonRead(ctx context.Context, request operations.NodesAddonReadRequest) (*operations.NodesAddonReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/addons/{provider}/", request.PathParams)

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

	res := &operations.NodesAddonReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesAddonsFoldersList - List all addon folders
//
// A paginated list of folders retrieved from the associated third-party (provider) service.
// #### Permissions
// Folders are visible only to the user that authorized the addon.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of addon folder objects. Each resource in the array is a separate addon folder object and contains the full representation of the addon folder, meaning additional requests to a addon folder's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) NodesAddonsFoldersList(ctx context.Context, request operations.NodesAddonsFoldersListRequest) (*operations.NodesAddonsFoldersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/addons/{provider}/folders/", request.PathParams)

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

	res := &operations.NodesAddonsFoldersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesAddonsList - List all addons
//
// A paginated list of addons connected to the given node or project.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of at most 10 addon objects. Each resource in the array is a separate addon object and contains the full representation of the addon, meaning additional requests to a addon's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) NodesAddonsList(ctx context.Context, request operations.NodesAddonsListRequest) (*operations.NodesAddonsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/addons/", request.PathParams)

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

	res := &operations.NodesAddonsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesChildrenCreate - Create a child node
// Creates a new child node.
//
// Note: Creating a child node via this endpoint will function the same as creating a node via the node list endpoint, but the child node will have the given node set as its parent.
// #### Permissions
// Only write contributors may create children nodes.
// #### Required
// Required fields for creating a node include:
//
// &nbsp;&nbsp;&nbsp;&nbsp`title`
//
// &nbsp;&nbsp;&nbsp;&nbsp`category`
//
// Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesChildrenCreate(ctx context.Context, request operations.NodesChildrenCreateRequest) (*operations.NodesChildrenCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/children/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesChildrenCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesChildrenList - List all child nodes
//
// A paginated list of the next level child nodes for the given node. The returned nodes are sorted by their `date_modified`, with the most recently updated child nodes appearing first.
//
// The list will include child nodes that are public, as well as child nodes that are private, if the authenticated user has permission to view them.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 child nodes. If the given node has zero child nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the child node, meaning additional requests to the child node's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.
//
// Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
//
// Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
func (s *SDK) NodesChildrenList(ctx context.Context, request operations.NodesChildrenListRequest) (*operations.NodesChildrenListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/children/", request.PathParams)

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

	res := &operations.NodesChildrenListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesCitationList - Retrieve citation details
// The citation details for a node, in CSL format.
// #### Returns
// Returns a JSON object with a `data` key that contains the representation of the details necessary for the node citation.
func (s *SDK) NodesCitationList(ctx context.Context, request operations.NodesCitationListRequest) (*operations.NodesCitationListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/citation/", request.PathParams)

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

	res := &operations.NodesCitationListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesCitationRead - Retrieve a styled citation
// The citation for a node in a specific style.
// #### Returns
// Returns a JSON object with a `data` key that contains the representation of the node citation, in the requested style.
func (s *SDK) NodesCitationRead(ctx context.Context, request operations.NodesCitationReadRequest) (*operations.NodesCitationReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/citation/{style_id}/", request.PathParams)

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

	res := &operations.NodesCitationReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesCommentCreate - Create a comment
// Create a comment on a given node overview page or a reply to a comment on that node.
//
// To create a comment on the node overview page, the target `type` would be "nodes" and the target `id` would be the node `id`.
//
// To reply to a comment on this node, the target `type` would be "comments" and the target `id` would be the `id` of the comment to reply to.
// ####Required
// A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.
// In addition, the `content` attribute describing the relationship between the node and the comment is required.
// #### Returns
// Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesCommentCreate(ctx context.Context, request operations.NodesCommentCreateRequest) (*operations.NodesCommentCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/comments/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesCommentCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesCommentsList - List all comments
//
// A paginated list of comments related to a given node.
//
// The returned comments are sorted by their creation date, with the most recent comments appearing first.
// #### Permissions
// Comments on public nodes are given read-only access to everyone.
//
// If the node comment-level is `private`, only contributors have permission to comment.
//
// If the comment-level is `public`, any logged-in OSF user can comment.
//
// Comments on private nodes are only visible to contributors and administrators on the parent node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93
//
// Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.
//
// Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.
func (s *SDK) NodesCommentsList(ctx context.Context, request operations.NodesCommentsListRequest) (*operations.NodesCommentsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/comments/", request.PathParams)

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

	res := &operations.NodesCommentsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesContributorsCreate - Create a contributor
// Adds a contributor to a node, effectively creating a relationship between the node and a user.
//
// Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
//
// Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
// #### Permissions
// Only project administrators can add contributors to a node.
// #### Required
// A relationship object with a `data` key, containing the `users` type and valid user ID is required.
//
// All attributes describing the relationship between the node and the user are optional.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesContributorsCreate(ctx context.Context, request operations.NodesContributorsCreateRequest) (*operations.NodesContributorsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/contributors/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesContributorsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesContributorsDelete - Delete a contributor
// Removes a contributor from a node. This request only removes the relationship between the node and the user, it does not delete the user itself.
//
// A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.
// #### Permissions
// A user can remove themselves as a node contributor. Otherwise, only project administrators can remove contributors.
// #### Returns
// If the request is successful, no content is returned.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesContributorsDelete(ctx context.Context, request operations.NodesContributorsDeleteRequest) (*operations.NodesContributorsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/contributors/{user_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.NodesContributorsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// NodesContributorsList - List all contributors
// A paginated list of the node's contributors, sorted by their index.
//
// Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
//
// Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
//
// Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.
//
// Contributors may be filtered by their `bibliographic` and `permission` attributes.
func (s *SDK) NodesContributorsList(ctx context.Context, request operations.NodesContributorsListRequest) (*operations.NodesContributorsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/contributors/", request.PathParams)

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

	res := &operations.NodesContributorsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesContributorsPartialUpdate - Update a contributor
// Updates a contributor by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
//
// Contributors can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
// #### Permissions
// Only project administrators can update the contributors on a node.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
//
// If the given user is not already in the contributor list, a 404 Not Found error will be returned. A node must always have at least one admin, and any attempt to downgrade the permissions of a sole admin will result in a 400 Bad Request error.
func (s *SDK) NodesContributorsPartialUpdate(ctx context.Context, request operations.NodesContributorsPartialUpdateRequest) (*operations.NodesContributorsPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/contributors/{user_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.NodesContributorsPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NodesContributorsRead - Retrieve a contributor
// Retrieves the details of a given contributor.
//
// Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
//
// Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesContributorsRead(ctx context.Context, request operations.NodesContributorsReadRequest) (*operations.NodesContributorsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/contributors/{user_id}/", request.PathParams)

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

	res := &operations.NodesContributorsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesCreate - Create a node
// Creates a new node.
//
// On the OSF, nodes are considered **projects** or **components**. The difference between a project and a component is that a project is a top-level node, and a component is a child of a project.
//
// Additionally, nodes have a `category` field that includes **project** as an option. The categorization determines what icon is displayed with the node on the OSF, and helps with search organization. Projects (top-level nodes) may have a category other than project, and components (children) may have a category of **project**.
// #### Required
// Required fields for creating a node include:
//
// &nbsp;&nbsp;&nbsp;&nbsp`title`
//
// &nbsp;&nbsp;&nbsp;&nbsp`category`
//
// Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesCreate(ctx context.Context, request operations.NodesCreateRequest) (*operations.NodesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/nodes/"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesDelete - Delete a node
//
// Permanently deletes a node. This action cannot be undone.
// #### Permissions
// Only project administrators may delete a node. Attempting to delete a node for which you are not an administrator will result in a **403 Forbidden** response.
// #### Returns
// If the request is successful, no content is returned.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesDelete(ctx context.Context, request operations.NodesDeleteRequest) (*operations.NodesDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.NodesDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// NodesDraftRegistrationsCreate - Create a draft registration
// Initiate a draft registration of the current node.
// Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
//
// Your original project remains editable but will now have the draft registration linked to it.
// #### Permissions
// Only project administrators may view create registrations.
// #### Required
// Required fields for creating a draft registration include:
//
// &nbsp;&nbsp;&nbsp;&nbsp`registration_supplement`
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesDraftRegistrationsCreate(ctx context.Context, request operations.NodesDraftRegistrationsCreateRequest) (*operations.NodesDraftRegistrationsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/draft_registrations/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesDraftRegistrationsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesDraftRegistrationsDelete - Delete a draft registration
// Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
// #### Permissions
// Only project administrators may delete draft registrations.
// #### Returns
// If the request is successful, no content is returned.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
func (s *SDK) NodesDraftRegistrationsDelete(ctx context.Context, request operations.NodesDraftRegistrationsDeleteRequest) (*operations.NodesDraftRegistrationsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.NodesDraftRegistrationsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// NodesDraftRegistrationsList - List all draft registrations
// A paginated list of all of the draft registrations of a given node.
//
// Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
//
// Your original project remains editable but will now have the draft registration linked to it.
// #### Permissions
// Only project administrators may view draft registrations.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 draft registrations. Each resource in the array is a separate draft registration object and contains the full representation of the draft registration, meaning additional requests to a draft registration's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) NodesDraftRegistrationsList(ctx context.Context, request operations.NodesDraftRegistrationsListRequest) (*operations.NodesDraftRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/draft_registrations/", request.PathParams)

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

	res := &operations.NodesDraftRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesDraftRegistrationsPartialUpdate - Update a draft registration
// Updates a draft registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
//
// Draft registrations contain the supplemental registration questions that accompany a registration. Answer the questions in the draft registration supplement by sending update requests until you are ready to submit the draft.
//
// The registration supplement of a draft registration cannot be updated after the draft has been created.
//
// When updating a draft registration, `registration_metadata` is required. It must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the [registration schema](TODO: link me pls).
//
// If a question is multiple-choice, the question response must exactly match one of the possible choices.
// #### Permissions
// Only project administrators may update draft registrations.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesDraftRegistrationsPartialUpdate(ctx context.Context, request operations.NodesDraftRegistrationsPartialUpdateRequest) (*operations.NodesDraftRegistrationsPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.NodesDraftRegistrationsPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NodesDraftRegistrationsRead - Retrieve a draft registration
// Retrieve the details of a given draft registration.
// Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
//
// Your original project remains editable but will now have the draft registration linked to it.
// #### Permissions
// Only project administrators may view draft registrations.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesDraftRegistrationsRead(ctx context.Context, request operations.NodesDraftRegistrationsReadRequest) (*operations.NodesDraftRegistrationsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", request.PathParams)

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

	res := &operations.NodesDraftRegistrationsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesFilesList - List all node files
// List of all the files/folders that are attached to your project for a given storage provider.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// #### Filtering
//
// You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file
//
// Node files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.
//
// ###Waterbutler API actions
//
// Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).
//
// #### Download (files)
//
// To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.
//
// #### Create Subfolder (folders)
//
// You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.
//
// #### Upload New File (folders)
//
// To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.
//
// #### Update Existing File (file)
//
// To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.
//
// #### Rename (files, folders)
//
// To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.
//
// #### Move & Copy (files, folders)
//
// Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
// Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
// If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.
//
// #### Delete (file, folders)
//
// To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.
func (s *SDK) NodesFilesList(ctx context.Context, request operations.NodesFilesListRequest) (*operations.NodesFilesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/files/{provider}/", request.PathParams)

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

	res := &operations.NodesFilesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesFilesRead - Retrieve a file
// Retrieves the details of a file attached to given node (project or component) for the given storage provider.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesFilesRead(ctx context.Context, request operations.NodesFilesReadRequest) (*operations.NodesFilesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/files/{provider}/{path}/", request.PathParams)

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

	res := &operations.NodesFilesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesForksCreate - Create a fork of this node
// Creates a fork of the given node.
//
// Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
//
// You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.
//
// When creating a fork, your fork will only contain public components of the current node and components for which you are a contributor. Private components that you do not have access to will not be forked.
// #### Required
// There are no required attributes when creating a fork, as all of the forked node's attributes will be copied from the current node.
//
// The `title` field is optional, with the default title being "Fork of " prepended to the current node's title.
// #### Returns
// Returns a JSON object with a `data` key containing the complete srepresentation of the forked node, if the request is successful.
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesForksCreate(ctx context.Context, request operations.NodesForksCreateRequest) (*operations.NodesForksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/forks/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NodesForksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// NodesForksList - List all forks of this node
//
// A paginated list of the current node's forks. The returned fork nodes are sorted by their `forked_date`, with the most recently forked nodes appearing first.
//
// Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 forked nodes. If the current node has zero forked nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the forked node, meaning additional requests to the forked node's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
func (s *SDK) NodesForksList(ctx context.Context, request operations.NodesForksListRequest) (*operations.NodesForksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/forks/", request.PathParams)

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

	res := &operations.NodesForksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesIdentifiersList - List all identifiers
// List all identifiers associated with a given node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
//
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=ark
//
// Identifiers may be filtered by their `category` e.g `ark` or `doi`.
func (s *SDK) NodesIdentifiersList(ctx context.Context, request operations.NodesIdentifiersListRequest) (*operations.NodesIdentifiersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/identifiers/", request.PathParams)

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

	res := &operations.NodesIdentifiersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesInstitutionsList - List all institutions
// List of all institutions affiliated with this node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) NodesInstitutionsList(ctx context.Context, request operations.NodesInstitutionsListRequest) (*operations.NodesInstitutionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/institutions/", request.PathParams)

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

	res := &operations.NodesInstitutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesLinkedNodesList - List all linked nodes
// List of all nodes linked to the given node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.
//
// Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.
func (s *SDK) NodesLinkedNodesList(ctx context.Context, request operations.NodesLinkedNodesListRequest) (*operations.NodesLinkedNodesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/linked_nodes/", request.PathParams)

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

	res := &operations.NodesLinkedNodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesList - List all nodes
//
// A paginated list of nodes, representing projects and components, on the OSF.
//
// The returned nodes are those which are public or which the user has access to view.
//
// The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.
//
// Registrations cannot be accessed through this endpoint (use the [registrations](#tag/Registrations) endpoints instead).
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.
//
// Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
//
// Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
func (s *SDK) NodesList(ctx context.Context) (*operations.NodesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/nodes/"

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

	res := &operations.NodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesLogsList - List all logs
// A paginated list of all logs associated with a given node.
//
// The returned logs are sorted by their `date`, with the most recents logs appearing first.
//
// This list includes the logs of the specified node as well as the logs of that node's children to which the current user has read-only access.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.
//
// Nodes may be filtered by their `action`, and `date`.
func (s *SDK) NodesLogsList(ctx context.Context, request operations.NodesLogsListRequest) (*operations.NodesLogsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/logs/", request.PathParams)

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

	res := &operations.NodesLogsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesNodeAddonUpdate - Update an addon
// Updates a node addon by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
//
// Node addon can be updated with either a **PUT** or **PATCH** request. The `external_account_id`, `enabled`, and `folder_id` fields are mandatory in a **PUT**, and optional in **PATCH**. Non-string values will be accepted and stringified, however we make no promises about the stringification output.
//
// To delete or deauthorize a node addon, issue a **PUT** with all fields set to `null` or `False`, or a **PATCH** with enabled set `False`.
// #### Permissions
// NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
// Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.
//
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated node addon, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesNodeAddonUpdate(ctx context.Context, request operations.NodesNodeAddonUpdateRequest) (*operations.NodesNodeAddonUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/addons/{provider}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.NodesNodeAddonUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NodesPartialUpdate - Update a node
// Updates a node by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
//
// Nodes can be updated with either a **PUT** or **PATCH** request. The `title` and `category` fields are mandatory in a **PUT** request, and optional in a **PATCH**.
// #### Permissions
// Only write contributors may update a node. Attempting to update a node for which you do not have write access will result in a **403 Forbidden** response.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesPartialUpdate(ctx context.Context, request operations.NodesPartialUpdateRequest) (*operations.NodesPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.NodesPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// NodesPreprintsList - List all preprints
// A paginated list of preprints related to a given node. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
//
// **Note: This API endpoint is under active development, and is subject to change in the future.**
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) NodesPreprintsList(ctx context.Context, request operations.NodesPreprintsListRequest) (*operations.NodesPreprintsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/preprints/", request.PathParams)

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

	res := &operations.NodesPreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesProvidersList - List all storage providers
// List of all storage providers that are configured for this node
//
// Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of files. Each resource in the array is a separate file object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.
func (s *SDK) NodesProvidersList(ctx context.Context, request operations.NodesProvidersListRequest) (*operations.NodesProvidersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/files/", request.PathParams)

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

	res := &operations.NodesProvidersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesProvidersRead - Retrieve a storage provider
// Retrieves the details of a storage provider enabled on this node.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesProvidersRead(ctx context.Context, request operations.NodesProvidersReadRequest) (*operations.NodesProvidersReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/files/providers/{provider}/", request.PathParams)

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

	res := &operations.NodesProvidersReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesRead - Retrieve a node
// Retrieves the details of a given node (project or component).
// #### Permissions
// Only project contributors may retrieve the details of a private node. Attempting to retreive a private node for which you are not a contributor will result in a **403 Forbidden** response.
//
// Authentication is not required to view the details of a public node, as public nodes give read-only access to everyone.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested node, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) NodesRead(ctx context.Context, request operations.NodesReadRequest) (*operations.NodesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/", request.PathParams)

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

	res := &operations.NodesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesRegistrationsList - List all registrations
// List of all registrations of the given node.
// #### Returns
//
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
//
// You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.
//
// Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
func (s *SDK) NodesRegistrationsList(ctx context.Context, request operations.NodesRegistrationsListRequest) (*operations.NodesRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/registrations/", request.PathParams)

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

	res := &operations.NodesRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesViewOnlyLinksList - List all view only links
// List of view only links on a node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// #### Permissions
//
// View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.
//
// #### Filtering
//
// You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.
//
// View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
func (s *SDK) NodesViewOnlyLinksList(ctx context.Context, request operations.NodesViewOnlyLinksListRequest) (*operations.NodesViewOnlyLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/view_only_links/", request.PathParams)

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

	res := &operations.NodesViewOnlyLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesViewOnlyLinksRead - Retrieve a view only link
// Retrieves the details of a view only link on a node.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Permissions
//
// View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.
func (s *SDK) NodesViewOnlyLinksRead(ctx context.Context, request operations.NodesViewOnlyLinksReadRequest) (*operations.NodesViewOnlyLinksReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/view_only_links/{link_id}/", request.PathParams)

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

	res := &operations.NodesViewOnlyLinksReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// NodesWikisList - List all wikis
// List of wiki pages on a node.
// #### Returns
// Paginated list of the node's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.
//
// Note that if an anonymous view_only key is being used, the user relationship will not be exposed.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// Wiki pages can be filtered based on their `name` and `date_modified` fields.
// + `filter[name]=<Str>` -- filter wiki pages by name
// + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.
//
// Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
func (s *SDK) NodesWikisList(ctx context.Context, request operations.NodesWikisListRequest) (*operations.NodesWikisListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/nodes/{node_id}/wikis/", request.PathParams)

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

	res := &operations.NodesWikisListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintProviderDetail - Retrieve a preprint provider
// Retrieves the details of a preprint provider.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
//
// #### Acceptable Subjects Structure
// Each preprint provider specifies acceptable subjects.
// `subjects_acceptable` is an array found in `attributes`.
// Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.
//
//	"subjects_acceptable": [
//	    [
//	        [
//	            # Parent Subject:
//	            # Architecture
//	            "584240d954be81056ceca9e5",
//
//	            # Child Subject:
//	            # Architectural Engineering
//	            "584240da54be81056cecac87"
//	        ],
//	        # Include all Architectural Engineering's children:
//	        true
//	    ],
//	    [
//	        [
//	            # Parent Subject:
//	            # Engineering
//	            "584240da54be81056cecaca9",
//
//	            # Child Subject:
//	            # Aerospace Engineering
//	            "584240db54be81056cecacd6",
//
//	            # Grandchild Subject:
//	            # Aerodynamics and Fluid Mechanics
//	            "584240da54be81056cecaa74"
//	        ],
//	        # All nestings 3 deep must be false
//	        false
//	    ]
//	]
//
// The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.
func (s *SDK) PreprintProviderDetail(ctx context.Context, request operations.PreprintProviderDetailRequest) (*operations.PreprintProviderDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprint_providers/{preprint_provider_id}/", request.PathParams)

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

	res := &operations.PreprintProviderDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintProviderLicensesList - List all licenses
//
// A paginated list of the licenses allowed bya preprint provider.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) PreprintProviderLicensesList(ctx context.Context, request operations.PreprintProviderLicensesListRequest) (*operations.PreprintProviderLicensesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprint_providers/{preprint_provider_id}/licenses/", request.PathParams)

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

	res := &operations.PreprintProviderLicensesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintProviderList - List all preprint providers
//
// A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.
//
// Preprint Providers may be filtered by their `id`, `name`,  and `description`
func (s *SDK) PreprintProviderList(ctx context.Context) (*operations.PreprintProviderListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/preprint_providers/"

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

	res := &operations.PreprintProviderListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintProviderTaxonomiesList - List all taxonomies
//
// A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) PreprintProviderTaxonomiesList(ctx context.Context, request operations.PreprintProviderTaxonomiesListRequest) (*operations.PreprintProviderTaxonomiesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprint_providers/{preprint_provider_id}/taxonomies/", request.PathParams)

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

	res := &operations.PreprintProviderTaxonomiesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintProvidersPreprintsList - List all preprints
//
// A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
//
// The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
//
// #### Filtering
// You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.
//
// Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
func (s *SDK) PreprintProvidersPreprintsList(ctx context.Context, request operations.PreprintProvidersPreprintsListRequest) (*operations.PreprintProvidersPreprintsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprint_providers/{preprint_provider_id}/preprints/", request.PathParams)

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

	res := &operations.PreprintProvidersPreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintsCitationList - Retrieve citation details
// The citation details for a preprint, in CSL format.
// #### Returns
// Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
func (s *SDK) PreprintsCitationList(ctx context.Context, request operations.PreprintsCitationListRequest) (*operations.PreprintsCitationListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprints/{preprint_id}/citation/", request.PathParams)

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

	res := &operations.PreprintsCitationListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintsCitationRead - Retrieve a styled citation
// The citation for a preprint in a specific style.
// #### Returns
// Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
func (s *SDK) PreprintsCitationRead(ctx context.Context, request operations.PreprintsCitationReadRequest) (*operations.PreprintsCitationReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprints/{preprint_id}/citation/{style_id}/", request.PathParams)

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

	res := &operations.PreprintsCitationReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintsCreate - Create a preprint
// Creates a new preprint.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
func (s *SDK) PreprintsCreate(ctx context.Context, request operations.PreprintsCreateRequest) (*operations.PreprintsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/preprints/"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PreprintsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// PreprintsList - List all preprints
//
// A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.
//
// Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
func (s *SDK) PreprintsList(ctx context.Context) (*operations.PreprintsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/preprints/"

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

	res := &operations.PreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// PreprintsPartialUpdate - Update a preprint
// Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
func (s *SDK) PreprintsPartialUpdate(ctx context.Context, request operations.PreprintsPartialUpdateRequest) (*operations.PreprintsPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprints/{preprint_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.PreprintsPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PreprintsRead - Retrieve a preprint
// Retrieves the details of a preprint.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) PreprintsRead(ctx context.Context, request operations.PreprintsReadRequest) (*operations.PreprintsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/preprints/{preprint_id}/", request.PathParams)

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

	res := &operations.PreprintsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsChildrenList - List all child registrations
//
// A paginated list of children of a registration.
//
// The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.
//
// The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// #### Filtering
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.
//
// Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
//
// Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
func (s *SDK) RegistrationsChildrenList(ctx context.Context, request operations.RegistrationsChildrenListRequest) (*operations.RegistrationsChildrenListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/children/", request.PathParams)

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

	res := &operations.RegistrationsChildrenListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsCitationRead - Retrieve a citation
// Retrieves the citation style details for a registration, in CSL format.
// #### Returns
// Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.
func (s *SDK) RegistrationsCitationRead(ctx context.Context, request operations.RegistrationsCitationReadRequest) (*operations.RegistrationsCitationReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/citations/{citation_id}/", request.PathParams)

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

	res := &operations.RegistrationsCitationReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsCitationsList - List all citation styles
//
// # A paginated list of the registration's alternative citation styles
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.
//
// Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
func (s *SDK) RegistrationsCitationsList(ctx context.Context, request operations.RegistrationsCitationsListRequest) (*operations.RegistrationsCitationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/citations/", request.PathParams)

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

	res := &operations.RegistrationsCitationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsCommentsList - List all comments
//
// A paginated list of the registration's comments.
//
// The returned comments are sorted by their creation date, with the most recent comments appearing first.
// #### Permissions
// Comments of public registrations are given read-only access to everyone.
//
// If the comment-level is `private`, only registration contributors have permission to comment.
//
// If the comment-level is `public`, any logged-in OSF user can comment.
//
// Comments of private registrations are only visible to contributors and administrators on the registration.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf
//
// Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.
//
// Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.
func (s *SDK) RegistrationsCommentsList(ctx context.Context, request operations.RegistrationsCommentsListRequest) (*operations.RegistrationsCommentsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/comments/", request.PathParams)

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

	res := &operations.RegistrationsCommentsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsContributorsList - List all contributors
// A paginated list of all contributors on this registration.
// The returned contributors are sorted by their index.
//
// Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.
//
// Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.
//
// Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.
//
// Contributors may be filtered by their `bibliographic` and `permission` attributes.
func (s *SDK) RegistrationsContributorsList(ctx context.Context, request operations.RegistrationsContributorsListRequest) (*operations.RegistrationsContributorsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/contributors/", request.PathParams)

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

	res := &operations.RegistrationsContributorsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsContributorsRead - Retrieve a contributor
// Retrieves the details of a contributor on this registration.
//
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) RegistrationsContributorsRead(ctx context.Context, request operations.RegistrationsContributorsReadRequest) (*operations.RegistrationsContributorsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/contributors/{user_id}/", request.PathParams)

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

	res := &operations.RegistrationsContributorsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsFilesList - List all files
// List of all the registration's files/folders for a given storage provider.
//
// #### Returns
//
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// #### Filtering
//
// You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file
//
// Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.
func (s *SDK) RegistrationsFilesList(ctx context.Context, request operations.RegistrationsFilesListRequest) (*operations.RegistrationsFilesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/files/{provider}/", request.PathParams)

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

	res := &operations.RegistrationsFilesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsFilesRead - Retrieve a file
// Retrieves the details of a registration file for the given storage provider.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) RegistrationsFilesRead(ctx context.Context, request operations.RegistrationsFilesReadRequest) (*operations.RegistrationsFilesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/files/{provider}/{path}/", request.PathParams)

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

	res := &operations.RegistrationsFilesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsForksCreate - Create a fork
// Creates a fork of the given registration.
//
// Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.
//
// You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.
//
// When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
// #### Required
// There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.
//
// The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
// #### Returns
// Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) RegistrationsForksCreate(ctx context.Context, request operations.RegistrationsForksCreateRequest) (*operations.RegistrationsForksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/forks/", request.PathParams)

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

	res := &operations.RegistrationsForksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// RegistrationsForksList - List all forks
//
// # A paginated list of the registration’s forks
//
// The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.
//
// Forking a registration creates a copy of an existing registration and all of its contents.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) RegistrationsForksList(ctx context.Context, request operations.RegistrationsForksListRequest) (*operations.RegistrationsForksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/forks/", request.PathParams)

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

	res := &operations.RegistrationsForksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsIdentifiersList - List all identifiers
// A paginated list of the registration's identifiers.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
//
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark
//
// Identifiers may be filtered by their `category` e.g `ark` or `doi`.
func (s *SDK) RegistrationsIdentifiersList(ctx context.Context, request operations.RegistrationsIdentifiersListRequest) (*operations.RegistrationsIdentifiersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/identifiers/", request.PathParams)

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

	res := &operations.RegistrationsIdentifiersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsInstitutionsList - List all institutions
// A paginated list of institutions affiliated with the registration.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) RegistrationsInstitutionsList(ctx context.Context, request operations.RegistrationsInstitutionsListRequest) (*operations.RegistrationsInstitutionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/institutions/", request.PathParams)

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

	res := &operations.RegistrationsInstitutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsLinkedNodesList - List all linked nodes
// List of all nodes linked to the registration.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.
//
// Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.
func (s *SDK) RegistrationsLinkedNodesList(ctx context.Context, request operations.RegistrationsLinkedNodesListRequest) (*operations.RegistrationsLinkedNodesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/linked_nodes/", request.PathParams)

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

	res := &operations.RegistrationsLinkedNodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsList - List all registrations
// A paginated list of registrations on the OSF to which the user has access.
//
// The returned registrations are those which are public or which the user has access to view.
//
// Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).
//
// #### Registrations
// A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
//
// Registrations can be made public immediately or embargoed for up to 4 years.
//
// #### Withdrawals
// Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.
//
// Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
func (s *SDK) RegistrationsList(ctx context.Context) (*operations.RegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/registrations/"

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

	res := &operations.RegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsLogsList - List all logs
// A paginated list of the registration's logs.
//
// The returned logs are sorted by their `date`, with the most recents logs appearing first.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.
//
// Logs may be filtered by their `action`, and `date`.
func (s *SDK) RegistrationsLogsList(ctx context.Context, request operations.RegistrationsLogsListRequest) (*operations.RegistrationsLogsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/logs/", request.PathParams)

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

	res := &operations.RegistrationsLogsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsPartialUpdate - Update a registration
// Updates a registration's privacy from **private** to **public**.
//
// Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration
//
// Registrations can only be turned from private to public, not vice versa.
// #### Permissions
// Only project administrators may update a registration.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) RegistrationsPartialUpdate(ctx context.Context, request operations.RegistrationsPartialUpdateRequest) (*operations.RegistrationsPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, nil)
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

	res := &operations.RegistrationsPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// RegistrationsProvidersList - List all storage providers
// A paginated list of storage providers enabled on the registration
//
// Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.
func (s *SDK) RegistrationsProvidersList(ctx context.Context, request operations.RegistrationsProvidersListRequest) (*operations.RegistrationsProvidersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/files/", request.PathParams)

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

	res := &operations.RegistrationsProvidersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsRead - Retrieve a registration
// Retrieve the details of a given registration.
// #### Permissions
// Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.
//
// Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.
// #### Registrations
// A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
//
// Registrations can be made public immediately or embargoed for up to 4 years.
//
// #### Withdrawals
// Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) RegistrationsRead(ctx context.Context, request operations.RegistrationsReadRequest) (*operations.RegistrationsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/", request.PathParams)

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

	res := &operations.RegistrationsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsViewOnlyLinksList - List all view only links
// A paginated list of view only links created for this registration.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// #### Permissions
//
// View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
//
// #### Filtering
//
// You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.
//
// View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
func (s *SDK) RegistrationsViewOnlyLinksList(ctx context.Context, request operations.RegistrationsViewOnlyLinksListRequest) (*operations.RegistrationsViewOnlyLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/view_only_links/", request.PathParams)

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

	res := &operations.RegistrationsViewOnlyLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsViewOnlyLinksRead - Retrieve a view only link
// Retrieves the details of a view only link created from this registration.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Permissions
//
// View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
func (s *SDK) RegistrationsViewOnlyLinksRead(ctx context.Context, request operations.RegistrationsViewOnlyLinksReadRequest) (*operations.RegistrationsViewOnlyLinksReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/view_only_links/{link_id}/", request.PathParams)

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

	res := &operations.RegistrationsViewOnlyLinksReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// RegistrationsWikisList - List all wikis
// A paginated list of the registration's wiki pages
// #### Returns
// A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.
//
// If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
// #### Filtering
// Wiki pages can be filtered based on their `name` and `date_modified` fields.
// + `filter[name]=<Str>` -- filter wiki pages by name
// + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.
//
// Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
func (s *SDK) RegistrationsWikisList(ctx context.Context, request operations.RegistrationsWikisListRequest) (*operations.RegistrationsWikisListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registrations/{registration_id}/wikis/", request.PathParams)

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

	res := &operations.RegistrationsWikisListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// TaxonomiesList - List all taxonomies
//
// A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
// Note: this API endpoint is under active development, and is subject to change in the future.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.
//
// Taxonomies may be filtered by their `id`, `parents`, and `text`.
func (s *SDK) TaxonomiesList(ctx context.Context) (*operations.TaxonomiesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/taxonomies/"

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

	res := &operations.TaxonomiesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// TaxonomiesRead - Retrieve a taxonomy
// Retrieves the details of a taxonomy.
// #### Returns
//
// Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) TaxonomiesRead(ctx context.Context, request operations.TaxonomiesReadRequest) (*operations.TaxonomiesReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/taxonomies/{taxonomy_id}/", request.PathParams)

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

	res := &operations.TaxonomiesReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersAddonsList - List all user addons
//
// # A paginated list of authorized user addons
//
// #### Permissions
//
// User addons are visible only to the user that authorized the addon.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
//
// Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
func (s *SDK) UsersAddonsList(ctx context.Context, request operations.UsersAddonsListRequest) (*operations.UsersAddonsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/addons/", request.PathParams)

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

	res := &operations.UsersAddonsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersAddonsRead - Retrieve a user addon
// Retrieves the details of an authorized user addon
//
// #### Permissions
//
// User addons are visible only to the user that authorized the addon.
//
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
//
// Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
func (s *SDK) UsersAddonsRead(ctx context.Context, request operations.UsersAddonsReadRequest) (*operations.UsersAddonsReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/addons/{provider}/", request.PathParams)

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

	res := &operations.UsersAddonsReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersInstitutionsList - List all institutions
// A paginated list of institutions that the user is affiliated with.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *SDK) UsersInstitutionsList(ctx context.Context, request operations.UsersInstitutionsListRequest) (*operations.UsersInstitutionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/institutions/", request.PathParams)

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

	res := &operations.UsersInstitutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersList - List all users
//
// A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.
//
// The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.
// #### Versioning
// As of version `2.3`, merged users will not be returned from this endpoint.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// This request should never return an error.
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.
//
// Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.
func (s *SDK) UsersList(ctx context.Context) (*operations.UsersListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users/"

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

	res := &operations.UsersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersNodesList - List all nodes
// A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.
//
// If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.
//
// User registrations are not available at this endpoint.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.
//
// Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
func (s *SDK) UsersNodesList(ctx context.Context, request operations.UsersNodesListRequest) (*operations.UsersNodesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/nodes/", request.PathParams)

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

	res := &operations.UsersNodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersPartialUpdate - Update a user
// Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
//
// Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.
//
// **Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
// #### Returns
// Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) UsersPartialUpdate(ctx context.Context, request operations.UsersPartialUpdateRequest) (*operations.UsersPartialUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.UsersPartialUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// UsersPreprintsList - List all preprints
// A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.
//
// Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
func (s *SDK) UsersPreprintsList(ctx context.Context, request operations.UsersPreprintsListRequest) (*operations.UsersPreprintsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/preprints/", request.PathParams)

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

	res := &operations.UsersPreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersRead - Retrieve a user
// Retrieves the details of a given users.
//
// The returned information includes the user's bibliographic information and the date the user was registered.
//
// Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.
//
// If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) UsersRead(ctx context.Context, request operations.UsersReadRequest) (*operations.UsersReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/", request.PathParams)

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

	res := &operations.UsersReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// UsersRegistrationsList - List all registrations
// A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.
//
// If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.
//
// User nodes are not available at this endpoint.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
// #### Filtering
// You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.
//
// Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
func (s *SDK) UsersRegistrationsList(ctx context.Context, request operations.UsersRegistrationsListRequest) (*operations.UsersRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/registrations/", request.PathParams)

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

	res := &operations.UsersRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// ViewOnlyLinksNodeList - List all nodes
//
// The list of nodes which this view only link gives read-only access to.
// #### Permissions
// Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) ViewOnlyLinksNodeList(ctx context.Context, request operations.ViewOnlyLinksNodeListRequest) (*operations.ViewOnlyLinksNodeListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/view_only_links/{link_id}/nodes/", request.PathParams)

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

	res := &operations.ViewOnlyLinksNodeListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// ViewOnlyLinksRead - Retrieve a view only link
// Retrieves details about a specific view only link.
// #### Permissions
// Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) ViewOnlyLinksRead(ctx context.Context, request operations.ViewOnlyLinksReadRequest) (*operations.ViewOnlyLinksReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/view_only_links/{link_id}/", request.PathParams)

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

	res := &operations.ViewOnlyLinksReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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

// WikiContent - Retrieve the Content of a Wiki
// Retrieves the plaintext content of a wiki in markdown format.
// #### Returns
// Returns `text/markdown` of the wiki content itself.
// If the request is unsuccessful, plaintext with the error message will be displayed.
func (s *SDK) WikiContent(ctx context.Context, request operations.WikiContentRequest) (*operations.WikiContentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/wikis/{wiki_id}/content/", request.PathParams)

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

	res := &operations.WikiContentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WikiRead - Retrieve a Wiki
// Retrieves the details about a specific wiki.
// A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
// #### Returns
// Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.
//
// If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
func (s *SDK) WikiRead(ctx context.Context, request operations.WikiReadRequest) (*operations.WikiReadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/wikis/{wiki_id}/", request.PathParams)

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

	res := &operations.WikiReadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
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
