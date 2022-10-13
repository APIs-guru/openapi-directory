package shared

type GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum string

const (
	GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnumExclusionTypeUnspecified GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum = "EXCLUSION_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnumExclusionTypeExclude     GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum = "EXCLUSION_TYPE_EXCLUDE"
)

type GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum string

const (
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumLikelihoodUnspecified GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "LIKELIHOOD_UNSPECIFIED"
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumVeryUnlikely          GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "VERY_UNLIKELY"
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumUnlikely              GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "UNLIKELY"
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumPossible              GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "POSSIBLE"
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumLikely                GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "LIKELY"
	GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnumVeryLikely            GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum = "VERY_LIKELY"
)

type GooglePrivacyDlpV2CustomInfoType struct {
	DetectionRules []GooglePrivacyDlpV2DetectionRule                  `json:"detectionRules"`
	Dictionary     *GooglePrivacyDlpV2Dictionary                      `json:"dictionary"`
	ExclusionType  *GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum `json:"exclusionType"`
	InfoType       *GooglePrivacyDlpV2InfoType                        `json:"infoType"`
	Likelihood     *GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum    `json:"likelihood"`
	Regex          *GooglePrivacyDlpV2Regex                           `json:"regex"`
	StoredType     *GooglePrivacyDlpV2StoredType                      `json:"storedType"`
	SurrogateType  map[string]interface{}                             `json:"surrogateType"`
}
