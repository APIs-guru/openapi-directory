package shared

type InboundSamlSsoProfile struct {
	Customer    *string        `json:"customer,omitempty"`
	DisplayName *string        `json:"displayName,omitempty"`
	IdpConfig   *SamlIdpConfig `json:"idpConfig,omitempty"`
	Name        *string        `json:"name,omitempty"`
	SpConfig    *SamlSpConfig  `json:"spConfig,omitempty"`
}
