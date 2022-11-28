package shared

// QueryTestablePermissionsResponse
// The response containing permissions which can be tested on a resource.
type QueryTestablePermissionsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Permissions   []Permission `json:"permissions,omitempty"`
}
