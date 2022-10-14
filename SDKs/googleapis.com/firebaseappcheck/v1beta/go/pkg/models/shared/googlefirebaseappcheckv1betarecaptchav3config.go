package shared

type GoogleFirebaseAppcheckV1betaRecaptchaV3Config struct {
	Name          *string `json:"name,omitempty"`
	SiteSecret    *string `json:"siteSecret,omitempty"`
	SiteSecretSet *bool   `json:"siteSecretSet,omitempty"`
	TokenTTL      *string `json:"tokenTtl,omitempty"`
}
