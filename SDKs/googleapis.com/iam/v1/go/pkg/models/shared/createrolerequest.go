package shared



type CreateRoleRequest struct {
    Role *Role `json:"role,omitempty"`
    RoleID *string `json:"roleId,omitempty"`
    
}

