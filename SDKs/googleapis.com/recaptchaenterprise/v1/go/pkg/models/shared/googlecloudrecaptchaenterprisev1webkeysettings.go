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

type GoogleCloudRecaptchaenterpriseV1WebKeySettings struct {
	AllowAllDomains             *bool                                                                          `json:"allowAllDomains"`
	AllowAmpTraffic             *bool                                                                          `json:"allowAmpTraffic"`
	AllowedDomains              []string                                                                       `json:"allowedDomains"`
	ChallengeSecurityPreference *GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum `json:"challengeSecurityPreference"`
	IntegrationType             *GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum             `json:"integrationType"`
}
