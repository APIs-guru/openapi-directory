package shared

// GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
// Settings specific to keys that can be used by Android apps.
type GoogleCloudRecaptchaenterpriseV1AndroidKeySettings struct {
	AllowAllPackageNames *bool    `json:"allowAllPackageNames,omitempty"`
	AllowedPackageNames  []string `json:"allowedPackageNames,omitempty"`
}
