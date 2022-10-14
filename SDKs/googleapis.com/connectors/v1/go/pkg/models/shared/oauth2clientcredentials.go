package shared

type Oauth2ClientCredentials struct {
	ClientID     *string `json:"clientId,omitempty"`
	ClientSecret *Secret `json:"clientSecret,omitempty"`
}
