package shared

type Oidc struct {
	AllowedAudiences []string `json:"allowedAudiences,omitempty"`
	IssuerURI        *string  `json:"issuerUri,omitempty"`
}
