package shared

type GooglePrivacyDlpV2InspectConfigContentOptionsEnum string

const (
	GooglePrivacyDlpV2InspectConfigContentOptionsEnumContentUnspecified GooglePrivacyDlpV2InspectConfigContentOptionsEnum = "CONTENT_UNSPECIFIED"
	GooglePrivacyDlpV2InspectConfigContentOptionsEnumContentText        GooglePrivacyDlpV2InspectConfigContentOptionsEnum = "CONTENT_TEXT"
	GooglePrivacyDlpV2InspectConfigContentOptionsEnumContentImage       GooglePrivacyDlpV2InspectConfigContentOptionsEnum = "CONTENT_IMAGE"
)

type GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum string

const (
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumLikelihoodUnspecified GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "LIKELIHOOD_UNSPECIFIED"
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumVeryUnlikely          GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "VERY_UNLIKELY"
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumUnlikely              GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "UNLIKELY"
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumPossible              GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "POSSIBLE"
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumLikely                GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "LIKELY"
	GooglePrivacyDlpV2InspectConfigMinLikelihoodEnumVeryLikely            GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum = "VERY_LIKELY"
)

// GooglePrivacyDlpV2InspectConfig
// Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
type GooglePrivacyDlpV2InspectConfig struct {
	ContentOptions   []GooglePrivacyDlpV2InspectConfigContentOptionsEnum `json:"contentOptions,omitempty"`
	CustomInfoTypes  []GooglePrivacyDlpV2CustomInfoType                  `json:"customInfoTypes,omitempty"`
	ExcludeInfoTypes *bool                                               `json:"excludeInfoTypes,omitempty"`
	IncludeQuote     *bool                                               `json:"includeQuote,omitempty"`
	InfoTypes        []GooglePrivacyDlpV2InfoType                        `json:"infoTypes,omitempty"`
	Limits           *GooglePrivacyDlpV2FindingLimits                    `json:"limits,omitempty"`
	MinLikelihood    *GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum   `json:"minLikelihood,omitempty"`
	RuleSet          []GooglePrivacyDlpV2InspectionRuleSet               `json:"ruleSet,omitempty"`
}
