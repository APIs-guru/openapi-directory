package shared

// ResetPasswordResponse
// Response of resetting the password.
type ResetPasswordResponse struct {
	Email       *string `json:"email,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	NewEmail    *string `json:"newEmail,omitempty"`
	RequestType *string `json:"requestType,omitempty"`
}
