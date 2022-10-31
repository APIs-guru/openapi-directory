package shared



type UserRolePermissionsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    UserRolePermissions []UserRolePermission `json:"userRolePermissions,omitempty"`
    
}

