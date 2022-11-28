package shared

// UserRolesListResponse
// User Role List Response
type UserRolesListResponse struct {
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	UserRoles     []UserRole `json:"userRoles,omitempty"`
}
