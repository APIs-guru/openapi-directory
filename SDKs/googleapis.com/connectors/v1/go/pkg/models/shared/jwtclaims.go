package shared

type JwtClaims struct {
	Audience *string `json:"audience,omitempty"`
	Issuer   *string `json:"issuer,omitempty"`
	Subject  *string `json:"subject,omitempty"`
}
