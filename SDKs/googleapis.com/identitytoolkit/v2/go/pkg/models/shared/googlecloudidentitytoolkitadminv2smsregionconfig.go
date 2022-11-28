package shared

// GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig
// Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
type GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig struct {
	AllowByDefault *GoogleCloudIdentitytoolkitAdminV2AllowByDefault `json:"allowByDefault,omitempty"`
	AllowlistOnly  *GoogleCloudIdentitytoolkitAdminV2AllowlistOnly  `json:"allowlistOnly,omitempty"`
}
