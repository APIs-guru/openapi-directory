package shared

type EmailVerificationData struct {
	Domain             *string `json:"domain,omitempty"`
	IsUserNameEditable *bool   `json:"isUserNameEditable,omitempty"`
	User               *string `json:"user,omitempty"`
}
