package shared

type QueryTestablePermissionsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Permissions   []Permission `json:"permissions"`
}
