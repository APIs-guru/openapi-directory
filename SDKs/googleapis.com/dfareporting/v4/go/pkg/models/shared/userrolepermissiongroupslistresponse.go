package shared

// UserRolePermissionGroupsListResponse
// User Role Permission Group List Response
type UserRolePermissionGroupsListResponse struct {
	Kind                     *string                   `json:"kind,omitempty"`
	UserRolePermissionGroups []UserRolePermissionGroup `json:"userRolePermissionGroups,omitempty"`
}
