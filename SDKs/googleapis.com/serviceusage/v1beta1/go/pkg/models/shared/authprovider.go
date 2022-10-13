package shared

type AuthProvider struct {
	Audiences        *string       `json:"audiences"`
	AuthorizationURL *string       `json:"authorizationUrl"`
	ID               *string       `json:"id"`
	Issuer           *string       `json:"issuer"`
	JwksURI          *string       `json:"jwksUri"`
	JwtLocations     []JwtLocation `json:"jwtLocations"`
}
