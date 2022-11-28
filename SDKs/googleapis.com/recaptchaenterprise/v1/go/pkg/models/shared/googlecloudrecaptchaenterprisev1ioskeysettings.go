package shared

// GoogleCloudRecaptchaenterpriseV1IosKeySettings
// Settings specific to keys that can be used by iOS apps.
type GoogleCloudRecaptchaenterpriseV1IosKeySettings struct {
	AllowAllBundleIds *bool    `json:"allowAllBundleIds,omitempty"`
	AllowedBundleIds  []string `json:"allowedBundleIds,omitempty"`
}
