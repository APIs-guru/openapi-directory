package shared

type GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig struct {
	DisplayName *string                                     `json:"displayName"`
	Enabled     *bool                                       `json:"enabled"`
	IdpConfig   *GoogleCloudIdentitytoolkitAdminV2IdpConfig `json:"idpConfig"`
	Name        *string                                     `json:"name"`
	SpConfig    *GoogleCloudIdentitytoolkitAdminV2SpConfig  `json:"spConfig"`
}
