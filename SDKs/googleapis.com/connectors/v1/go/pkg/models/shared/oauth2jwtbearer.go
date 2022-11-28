package shared

// Oauth2JwtBearer
// Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
type Oauth2JwtBearer struct {
	ClientKey *Secret    `json:"clientKey,omitempty"`
	JwtClaims *JwtClaims `json:"jwtClaims,omitempty"`
}
