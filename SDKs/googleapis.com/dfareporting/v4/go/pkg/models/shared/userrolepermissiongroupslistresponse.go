package shared

type UserRolePermissionGroupsListResponse struct {
	Kind                     *string                   `json:"kind"`
	UserRolePermissionGroups []UserRolePermissionGroup `json:"userRolePermissionGroups"`
}
