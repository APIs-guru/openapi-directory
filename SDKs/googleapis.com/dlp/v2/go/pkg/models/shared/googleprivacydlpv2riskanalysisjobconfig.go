package shared

// GooglePrivacyDlpV2RiskAnalysisJobConfig
// Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
type GooglePrivacyDlpV2RiskAnalysisJobConfig struct {
	Actions       []GooglePrivacyDlpV2Action       `json:"actions,omitempty"`
	PrivacyMetric *GooglePrivacyDlpV2PrivacyMetric `json:"privacyMetric,omitempty"`
	SourceTable   *GooglePrivacyDlpV2BigQueryTable `json:"sourceTable,omitempty"`
}
