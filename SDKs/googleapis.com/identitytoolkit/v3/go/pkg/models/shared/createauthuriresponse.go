package shared

// CreateAuthURIResponse
// Response of creating the IDP authentication URL.
type CreateAuthURIResponse struct {
	AllProviders        []string `json:"allProviders,omitempty"`
	AuthURI             *string  `json:"authUri,omitempty"`
	CaptchaRequired     *bool    `json:"captchaRequired,omitempty"`
	ForExistingProvider *bool    `json:"forExistingProvider,omitempty"`
	Kind                *string  `json:"kind,omitempty"`
	ProviderID          *string  `json:"providerId,omitempty"`
	Registered          *bool    `json:"registered,omitempty"`
	SessionID           *string  `json:"sessionId,omitempty"`
	SigninMethods       []string `json:"signinMethods,omitempty"`
}
