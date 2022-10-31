package shared

type ResetPasswordResponse struct {
	Email       *string `json:"email,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	NewEmail    *string `json:"newEmail,omitempty"`
	RequestType *string `json:"requestType,omitempty"`
}
