package shared

type GooglePrivacyDlpV2BigQueryField struct {
	Field *GooglePrivacyDlpV2FieldID       `json:"field,omitempty"`
	Table *GooglePrivacyDlpV2BigQueryTable `json:"table,omitempty"`
}
