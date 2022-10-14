package shared

type GooglePrivacyDlpV2StatisticalTable struct {
	QuasiIds          []GooglePrivacyDlpV2QuasiIdentifierField `json:"quasiIds,omitempty"`
	RelativeFrequency *GooglePrivacyDlpV2FieldID               `json:"relativeFrequency,omitempty"`
	Table             *GooglePrivacyDlpV2BigQueryTable         `json:"table,omitempty"`
}
