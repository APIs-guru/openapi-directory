package shared

// JwtClaims
// JWT claims used for the jwt-bearer authorization grant.
type JwtClaims struct {
	Audience *string `json:"audience,omitempty"`
	Issuer   *string `json:"issuer,omitempty"`
	Subject  *string `json:"subject,omitempty"`
}
