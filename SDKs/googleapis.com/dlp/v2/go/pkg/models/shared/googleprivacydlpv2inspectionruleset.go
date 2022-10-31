package shared

type GooglePrivacyDlpV2InspectionRuleSet struct {
	InfoTypes []GooglePrivacyDlpV2InfoType       `json:"infoTypes,omitempty"`
	Rules     []GooglePrivacyDlpV2InspectionRule `json:"rules,omitempty"`
}
