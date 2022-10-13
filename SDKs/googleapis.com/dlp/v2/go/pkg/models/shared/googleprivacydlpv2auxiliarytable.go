package shared

type GooglePrivacyDlpV2AuxiliaryTable struct {
	QuasiIds          []GooglePrivacyDlpV2QuasiIDField `json:"quasiIds"`
	RelativeFrequency *GooglePrivacyDlpV2FieldID       `json:"relativeFrequency"`
	Table             *GooglePrivacyDlpV2BigQueryTable `json:"table"`
}
