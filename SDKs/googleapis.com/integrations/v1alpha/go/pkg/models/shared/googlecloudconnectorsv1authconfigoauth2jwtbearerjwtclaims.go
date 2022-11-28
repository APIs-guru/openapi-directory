package shared

// GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims
// JWT claims used for the jwt-bearer authorization grant.
type GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims struct {
	Audience *string `json:"audience,omitempty"`
	Issuer   *string `json:"issuer,omitempty"`
	Subject  *string `json:"subject,omitempty"`
}
