package shared

// UpdateUserPassword
// The update user password request body.
type UpdateUserPassword struct {
	CurrentPassword *string `json:"CurrentPassword,omitempty"`
	CurrentPw       *string `json:"CurrentPw,omitempty"`
	NewPw           *string `json:"NewPw,omitempty"`
	ResetPassword   *bool   `json:"ResetPassword,omitempty"`
}
