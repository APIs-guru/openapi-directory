package shared

type Oidc struct {
	AllowedAudiences []string `json:"allowedAudiences"`
	IssuerURI        *string  `json:"issuerUri"`
}
