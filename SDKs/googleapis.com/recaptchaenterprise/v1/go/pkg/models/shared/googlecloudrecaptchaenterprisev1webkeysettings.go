package shared

type GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum string

const (
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumChallengeSecurityPreferenceUnspecified GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumUsability                              GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum = "USABILITY"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumBalance                                GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum = "BALANCE"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnumSecurity                               GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum = "SECURITY"
)

type GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum string

const (
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumIntegrationTypeUnspecified GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum = "INTEGRATION_TYPE_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumScore                      GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum = "SCORE"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumCheckbox                   GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum = "CHECKBOX"
	GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnumInvisible                  GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum = "INVISIBLE"
)

// GoogleCloudRecaptchaenterpriseV1WebKeySettings
// Settings specific to keys that can be used by websites.
type GoogleCloudRecaptchaenterpriseV1WebKeySettings struct {
	AllowAllDomains             *bool                                                                          `json:"allowAllDomains,omitempty"`
	AllowAmpTraffic             *bool                                                                          `json:"allowAmpTraffic,omitempty"`
	AllowedDomains              []string                                                                       `json:"allowedDomains,omitempty"`
	ChallengeSecurityPreference *GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum `json:"challengeSecurityPreference,omitempty"`
	IntegrationType             *GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum             `json:"integrationType,omitempty"`
}
