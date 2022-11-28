package shared

// UserRolePermissionsListResponse
// User Role Permission List Response
type UserRolePermissionsListResponse struct {
	Kind                *string              `json:"kind,omitempty"`
	UserRolePermissions []UserRolePermission `json:"userRolePermissions,omitempty"`
}
