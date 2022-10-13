package shared

type EmailVerificationData struct {
	Domain             *string `json:"domain"`
	IsUserNameEditable *bool   `json:"isUserNameEditable"`
	User               *string `json:"user"`
}
