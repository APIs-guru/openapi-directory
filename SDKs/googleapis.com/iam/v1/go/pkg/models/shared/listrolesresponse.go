package shared

// ListRolesResponse
// The response containing the roles defined under a resource.
type ListRolesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Roles         []Role  `json:"roles,omitempty"`
}
