package shared

type CreateRoleRequest struct {
	Role   *Role   `json:"role"`
	RoleID *string `json:"roleId"`
}
