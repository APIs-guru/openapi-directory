package shared

type User struct {
	AssignedUserRoles []AssignedUserRole `json:"assignedUserRoles,omitempty"`
	DisplayName       *string            `json:"displayName,omitempty"`
	Email             *string            `json:"email,omitempty"`
	Name              *string            `json:"name,omitempty"`
	UserID            *string            `json:"userId,omitempty"`
}
