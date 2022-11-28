package shared

// GoogleFirebaseAppcheckV1RecaptchaV3Config
// An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
type GoogleFirebaseAppcheckV1RecaptchaV3Config struct {
	Name          *string `json:"name,omitempty"`
	SiteSecret    *string `json:"siteSecret,omitempty"`
	SiteSecretSet *bool   `json:"siteSecretSet,omitempty"`
	TokenTTL      *string `json:"tokenTtl,omitempty"`
}
