package shared

type InboundSamlSsoProfile struct {
	Customer    *string        `json:"customer"`
	DisplayName *string        `json:"displayName"`
	IdpConfig   *SamlIdpConfig `json:"idpConfig"`
	Name        *string        `json:"name"`
	SpConfig    *SamlSpConfig  `json:"spConfig"`
}
