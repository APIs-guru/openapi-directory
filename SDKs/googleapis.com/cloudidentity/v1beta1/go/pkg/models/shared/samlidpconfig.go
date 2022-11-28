package shared

// SamlIdpConfig
// SAML IDP (identity provider) configuration.
type SamlIdpConfig struct {
	ChangePasswordURI      *string `json:"changePasswordUri,omitempty"`
	EntityID               *string `json:"entityId,omitempty"`
	LogoutRedirectURI      *string `json:"logoutRedirectUri,omitempty"`
	SingleSignOnServiceURI *string `json:"singleSignOnServiceUri,omitempty"`
}
