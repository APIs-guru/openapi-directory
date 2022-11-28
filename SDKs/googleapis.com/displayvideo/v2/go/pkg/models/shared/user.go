package shared

// User
// A single user in Display & Video 360.
type User struct {
	AssignedUserRoles []AssignedUserRole `json:"assignedUserRoles,omitempty"`
	DisplayName       *string            `json:"displayName,omitempty"`
	Email             *string            `json:"email,omitempty"`
	Name              *string            `json:"name,omitempty"`
	UserID            *string            `json:"userId,omitempty"`
}

// UserInput
// A single user in Display & Video 360.
type UserInput struct {
	AssignedUserRoles []AssignedUserRoleInput `json:"assignedUserRoles,omitempty"`
	DisplayName       *string                 `json:"displayName,omitempty"`
	Email             *string                 `json:"email,omitempty"`
}
