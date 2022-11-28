package shared

// AuthProvider
// Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
type AuthProvider struct {
	Audiences        *string       `json:"audiences,omitempty"`
	AuthorizationURL *string       `json:"authorizationUrl,omitempty"`
	ID               *string       `json:"id,omitempty"`
	Issuer           *string       `json:"issuer,omitempty"`
	JwksURI          *string       `json:"jwksUri,omitempty"`
	JwtLocations     []JwtLocation `json:"jwtLocations,omitempty"`
}
