package shared

// OAuthSettings
// Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
type OAuthSettings struct {
	LoginHint *string `json:"loginHint,omitempty"`
}
