package shared

// Oidc
// Represents an OpenId Connect 1.0 identity provider.
type Oidc struct {
	AllowedAudiences []string `json:"allowedAudiences,omitempty"`
	IssuerURI        *string  `json:"issuerUri,omitempty"`
}
