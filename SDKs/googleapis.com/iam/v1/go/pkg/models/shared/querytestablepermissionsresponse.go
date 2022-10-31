package shared

type QueryTestablePermissionsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Permissions   []Permission `json:"permissions,omitempty"`
}
