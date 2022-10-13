package shared

type CreateAuthURIResponse struct {
	AllProviders        []string `json:"allProviders"`
	AuthURI             *string  `json:"authUri"`
	CaptchaRequired     *bool    `json:"captchaRequired"`
	ForExistingProvider *bool    `json:"forExistingProvider"`
	Kind                *string  `json:"kind"`
	ProviderID          *string  `json:"providerId"`
	Registered          *bool    `json:"registered"`
	SessionID           *string  `json:"sessionId"`
	SigninMethods       []string `json:"signinMethods"`
}
