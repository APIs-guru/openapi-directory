package shared

type GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum string

const (
	GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnumMatchingTypeUnspecified  GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = "MATCHING_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnumMatchingTypeFullMatch    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = "MATCHING_TYPE_FULL_MATCH"
	GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnumMatchingTypePartialMatch GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = "MATCHING_TYPE_PARTIAL_MATCH"
	GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnumMatchingTypeInverseMatch GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = "MATCHING_TYPE_INVERSE_MATCH"
)

type GooglePrivacyDlpV2ExclusionRule struct {
	Dictionary       *GooglePrivacyDlpV2Dictionary                    `json:"dictionary"`
	ExcludeInfoTypes *GooglePrivacyDlpV2ExcludeInfoTypes              `json:"excludeInfoTypes"`
	MatchingType     *GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum `json:"matchingType"`
	Regex            *GooglePrivacyDlpV2Regex                         `json:"regex"`
}
