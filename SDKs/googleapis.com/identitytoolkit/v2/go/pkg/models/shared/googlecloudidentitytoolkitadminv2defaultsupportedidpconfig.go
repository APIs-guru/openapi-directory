package shared

type GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig struct {
	AppleSignInConfig *GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig `json:"appleSignInConfig"`
	ClientID          *string                                             `json:"clientId"`
	ClientSecret      *string                                             `json:"clientSecret"`
	Enabled           *bool                                               `json:"enabled"`
	Name              *string                                             `json:"name"`
}
