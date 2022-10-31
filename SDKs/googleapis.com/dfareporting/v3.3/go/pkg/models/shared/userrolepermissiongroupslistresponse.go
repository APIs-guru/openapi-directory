package shared

type UserRolePermissionGroupsListResponse struct {
	Kind                     *string                   `json:"kind,omitempty"`
	UserRolePermissionGroups []UserRolePermissionGroup `json:"userRolePermissionGroups,omitempty"`
}
