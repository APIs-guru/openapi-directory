package shared

type GooglePrivacyDlpV2StatisticalTable struct {
	QuasiIds          []GooglePrivacyDlpV2QuasiIdentifierField `json:"quasiIds"`
	RelativeFrequency *GooglePrivacyDlpV2FieldID               `json:"relativeFrequency"`
	Table             *GooglePrivacyDlpV2BigQueryTable         `json:"table"`
}
