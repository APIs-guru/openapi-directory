package shared

type AuthProvider struct {
	Audiences        *string       `json:"audiences,omitempty"`
	AuthorizationURL *string       `json:"authorizationUrl,omitempty"`
	ID               *string       `json:"id,omitempty"`
	Issuer           *string       `json:"issuer,omitempty"`
	JwksURI          *string       `json:"jwksUri,omitempty"`
	JwtLocations     []JwtLocation `json:"jwtLocations,omitempty"`
}
