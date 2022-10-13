package shared

type TagConsentSettingConsentStatusEnum string

const (
	TagConsentSettingConsentStatusEnumNotSet    TagConsentSettingConsentStatusEnum = "notSet"
	TagConsentSettingConsentStatusEnumNotNeeded TagConsentSettingConsentStatusEnum = "notNeeded"
	TagConsentSettingConsentStatusEnumNeeded    TagConsentSettingConsentStatusEnum = "needed"
)

type TagConsentSetting struct {
	ConsentStatus *TagConsentSettingConsentStatusEnum `json:"consentStatus"`
	ConsentType   *Parameter                          `json:"consentType"`
}
