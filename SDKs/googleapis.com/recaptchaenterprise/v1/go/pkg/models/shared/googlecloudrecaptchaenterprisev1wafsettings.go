package shared

type GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum string

const (
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumWafFeatureUnspecified GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum = "WAF_FEATURE_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumChallengePage         GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum = "CHALLENGE_PAGE"
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumSessionToken          GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum = "SESSION_TOKEN"
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnumActionToken           GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum = "ACTION_TOKEN"
)

type GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum string

const (
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnumWafServiceUnspecified GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum = "WAF_SERVICE_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnumCa                    GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum = "CA"
)

type GoogleCloudRecaptchaenterpriseV1WafSettings struct {
	WafFeature *GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum `json:"wafFeature,omitempty"`
	WafService *GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum `json:"wafService,omitempty"`
}
