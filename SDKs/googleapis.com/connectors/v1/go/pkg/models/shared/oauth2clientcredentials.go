package shared

type Oauth2ClientCredentials struct {
	ClientID     *string `json:"clientId"`
	ClientSecret *Secret `json:"clientSecret"`
}
