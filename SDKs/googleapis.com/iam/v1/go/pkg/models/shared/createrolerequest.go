package shared

// CreateRoleRequest
// The request to create a new role.
type CreateRoleRequest struct {
	Role   *Role   `json:"role,omitempty"`
	RoleID *string `json:"roleId,omitempty"`
}
