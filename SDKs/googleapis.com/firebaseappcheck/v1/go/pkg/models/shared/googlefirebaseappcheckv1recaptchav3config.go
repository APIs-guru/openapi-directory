package shared

type GoogleFirebaseAppcheckV1RecaptchaV3Config struct {
	Name          *string `json:"name"`
	SiteSecret    *string `json:"siteSecret"`
	SiteSecretSet *bool   `json:"siteSecretSet"`
	TokenTTL      *string `json:"tokenTtl"`
}
