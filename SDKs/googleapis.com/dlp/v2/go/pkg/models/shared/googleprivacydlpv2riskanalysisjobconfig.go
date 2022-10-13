package shared

type GooglePrivacyDlpV2RiskAnalysisJobConfig struct {
	Actions       []GooglePrivacyDlpV2Action       `json:"actions"`
	PrivacyMetric *GooglePrivacyDlpV2PrivacyMetric `json:"privacyMetric"`
	SourceTable   *GooglePrivacyDlpV2BigQueryTable `json:"sourceTable"`
}
