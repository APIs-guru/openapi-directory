package shared

type UserRolePermissionsListResponse struct {
	Kind                *string              `json:"kind"`
	UserRolePermissions []UserRolePermission `json:"userRolePermissions"`
}
