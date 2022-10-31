package shared

type GooglePrivacyDlpV2RiskAnalysisJobConfig struct {
	Actions       []GooglePrivacyDlpV2Action       `json:"actions,omitempty"`
	PrivacyMetric *GooglePrivacyDlpV2PrivacyMetric `json:"privacyMetric,omitempty"`
	SourceTable   *GooglePrivacyDlpV2BigQueryTable `json:"sourceTable,omitempty"`
}
