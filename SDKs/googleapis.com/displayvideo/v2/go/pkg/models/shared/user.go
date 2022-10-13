package shared

type User struct {
	AssignedUserRoles []AssignedUserRole `json:"assignedUserRoles"`
	DisplayName       *string            `json:"displayName"`
	Email             *string            `json:"email"`
	Name              *string            `json:"name"`
	UserID            *string            `json:"userId"`
}
