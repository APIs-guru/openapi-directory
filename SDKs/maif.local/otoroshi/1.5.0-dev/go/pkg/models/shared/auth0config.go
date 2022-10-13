package shared

type Auth0Config struct {
	CallbackURL  string `json:"callbackUrl"`
	ClientID     string `json:"clientId"`
	ClientSecret string `json:"clientSecret"`
	Domain       string `json:"domain"`
}
