package shared

type JwtClaims struct {
	Audience *string `json:"audience"`
	Issuer   *string `json:"issuer"`
	Subject  *string `json:"subject"`
}
