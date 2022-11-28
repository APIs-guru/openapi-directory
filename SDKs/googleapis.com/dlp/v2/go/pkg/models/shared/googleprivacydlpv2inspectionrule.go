package shared

// GooglePrivacyDlpV2InspectionRule
// A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
type GooglePrivacyDlpV2InspectionRule struct {
	ExclusionRule *GooglePrivacyDlpV2ExclusionRule `json:"exclusionRule,omitempty"`
	HotwordRule   *GooglePrivacyDlpV2HotwordRule   `json:"hotwordRule,omitempty"`
}
