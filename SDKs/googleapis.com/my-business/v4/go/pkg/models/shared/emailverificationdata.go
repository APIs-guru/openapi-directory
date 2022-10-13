package shared

type EmailVerificationData struct {
	DomainName         *string `json:"domainName"`
	IsUserNameEditable *bool   `json:"isUserNameEditable"`
	UserName           *string `json:"userName"`
}
