package shared

type GoogleFirebaseAppcheckV1betaRecaptchaConfig struct {
	Name          *string `json:"name,omitempty"`
	SiteSecret    *string `json:"siteSecret,omitempty"`
	SiteSecretSet *bool   `json:"siteSecretSet,omitempty"`
	TokenTTL      *string `json:"tokenTtl,omitempty"`
}
