package shared

// GooglePrivacyDlpV2InspectionRuleSet
// Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
type GooglePrivacyDlpV2InspectionRuleSet struct {
	InfoTypes []GooglePrivacyDlpV2InfoType       `json:"infoTypes,omitempty"`
	Rules     []GooglePrivacyDlpV2InspectionRule `json:"rules,omitempty"`
}
