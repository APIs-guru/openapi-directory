package shared

type GooglePrivacyDlpV2InspectionRuleSet struct {
	InfoTypes []GooglePrivacyDlpV2InfoType       `json:"infoTypes"`
	Rules     []GooglePrivacyDlpV2InspectionRule `json:"rules"`
}
