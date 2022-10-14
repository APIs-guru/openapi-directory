package shared

type SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum string

const (
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryUnspecified             SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_UNSPECIFIED"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryAdult                   SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_ADULT"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDerogatory              SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DEROGATORY"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDownloadsSharing        SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryWeapons                 SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_WEAPONS"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryGambling                SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_GAMBLING"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryViolence                SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_VIOLENCE"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategorySuggestive              SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SUGGESTIVE"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryProfanity               SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_PROFANITY"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryAlcohol                 SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_ALCOHOL"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDrugs                   SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DRUGS"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTobacco                 SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TOBACCO"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryPolitics                SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_POLITICS"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryReligion                SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_RELIGION"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTragedy                 SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TRAGEDY"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTransportationAccidents SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategorySensitiveSocialIssues   SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES"
	SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryShocking                SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SHOCKING"
)

type SensitiveCategoryTargetingOptionDetails struct {
	SensitiveCategory *SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum `json:"sensitiveCategory,omitempty"`
}
