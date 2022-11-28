package shared

// SamlSsoInfo
// Details that are applicable when `sso_mode` == `SAML_SSO`.
type SamlSsoInfo struct {
	InboundSamlSsoProfile *string `json:"inboundSamlSsoProfile,omitempty"`
}
