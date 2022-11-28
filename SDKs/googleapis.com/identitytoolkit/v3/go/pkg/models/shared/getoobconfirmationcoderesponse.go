package shared

// GetOobConfirmationCodeResponse
// Response of getting a code for user confirmation (reset password, change email etc.).
type GetOobConfirmationCodeResponse struct {
	Email   *string `json:"email,omitempty"`
	Kind    *string `json:"kind,omitempty"`
	OobCode *string `json:"oobCode,omitempty"`
}
