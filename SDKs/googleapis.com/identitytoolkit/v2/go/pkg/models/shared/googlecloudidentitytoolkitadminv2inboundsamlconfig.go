package shared

// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
// A pair of SAML RP-IDP configurations when the project acts as the relying party.
type GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig struct {
	DisplayName *string                                     `json:"displayName,omitempty"`
	Enabled     *bool                                       `json:"enabled,omitempty"`
	IdpConfig   *GoogleCloudIdentitytoolkitAdminV2IdpConfig `json:"idpConfig,omitempty"`
	Name        *string                                     `json:"name,omitempty"`
	SpConfig    *GoogleCloudIdentitytoolkitAdminV2SpConfig  `json:"spConfig,omitempty"`
}

// GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
// A pair of SAML RP-IDP configurations when the project acts as the relying party.
type GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput struct {
	DisplayName *string                                         `json:"displayName,omitempty"`
	Enabled     *bool                                           `json:"enabled,omitempty"`
	IdpConfig   *GoogleCloudIdentitytoolkitAdminV2IdpConfig     `json:"idpConfig,omitempty"`
	Name        *string                                         `json:"name,omitempty"`
	SpConfig    *GoogleCloudIdentitytoolkitAdminV2SpConfigInput `json:"spConfig,omitempty"`
}
