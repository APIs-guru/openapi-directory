package shared

type SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum string

const (
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryUnspecified             SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_UNSPECIFIED"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryAdult                   SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_ADULT"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDerogatory              SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DEROGATORY"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDownloadsSharing        SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryWeapons                 SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_WEAPONS"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryGambling                SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_GAMBLING"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryViolence                SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_VIOLENCE"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategorySuggestive              SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SUGGESTIVE"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryProfanity               SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_PROFANITY"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryAlcohol                 SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_ALCOHOL"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryDrugs                   SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_DRUGS"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTobacco                 SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TOBACCO"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryPolitics                SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_POLITICS"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryReligion                SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_RELIGION"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTragedy                 SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TRAGEDY"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryTransportationAccidents SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategorySensitiveSocialIssues   SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES"
	SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnumSensitiveCategoryShocking                SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = "SENSITIVE_CATEGORY_SHOCKING"
)

type SensitiveCategoryAssignedTargetingOptionDetails struct {
	ExcludedTargetingOptionID *string                                                               `json:"excludedTargetingOptionId"`
	SensitiveCategory         *SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum `json:"sensitiveCategory"`
}
