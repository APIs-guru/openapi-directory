package shared

// GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
// Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
type GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig struct {
	AppleSignInConfig *GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig `json:"appleSignInConfig,omitempty"`
	ClientID          *string                                             `json:"clientId,omitempty"`
	ClientSecret      *string                                             `json:"clientSecret,omitempty"`
	Enabled           *bool                                               `json:"enabled,omitempty"`
	Name              *string                                             `json:"name,omitempty"`
}
