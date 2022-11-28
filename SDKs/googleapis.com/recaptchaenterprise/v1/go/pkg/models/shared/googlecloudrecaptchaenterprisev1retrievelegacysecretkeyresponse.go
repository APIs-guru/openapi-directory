package shared

// GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
// Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
type GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse struct {
	LegacySecretKey *string `json:"legacySecretKey,omitempty"`
}
