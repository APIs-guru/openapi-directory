package shared

// InboundSamlSsoProfile
// A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
type InboundSamlSsoProfile struct {
	Customer    *string        `json:"customer,omitempty"`
	DisplayName *string        `json:"displayName,omitempty"`
	IdpConfig   *SamlIdpConfig `json:"idpConfig,omitempty"`
	Name        *string        `json:"name,omitempty"`
	SpConfig    *SamlSpConfig  `json:"spConfig,omitempty"`
}

// InboundSamlSsoProfileInput
// A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
type InboundSamlSsoProfileInput struct {
	Customer    *string        `json:"customer,omitempty"`
	DisplayName *string        `json:"displayName,omitempty"`
	IdpConfig   *SamlIdpConfig `json:"idpConfig,omitempty"`
}
