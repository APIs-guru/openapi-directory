package shared

// GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig
// An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
type GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig struct {
	Name     *string `json:"name,omitempty"`
	SiteKey  *string `json:"siteKey,omitempty"`
	TokenTTL *string `json:"tokenTtl,omitempty"`
}
