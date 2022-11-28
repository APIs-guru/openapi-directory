package shared

// GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig
// Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
type GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig struct {
	EnableImprovedEmailPrivacy *bool `json:"enableImprovedEmailPrivacy,omitempty"`
}
