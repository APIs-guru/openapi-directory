package shared

// ListUserPermissionsResponse
// List user permissions response.
type ListUserPermissionsResponse struct {
	NextPageToken  *string          `json:"nextPageToken,omitempty"`
	UserPermission []UserPermission `json:"userPermission,omitempty"`
}
