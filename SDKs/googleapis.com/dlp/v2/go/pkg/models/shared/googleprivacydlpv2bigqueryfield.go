package shared

// GooglePrivacyDlpV2BigQueryField
// Message defining a field of a BigQuery table.
type GooglePrivacyDlpV2BigQueryField struct {
	Field *GooglePrivacyDlpV2FieldID       `json:"field,omitempty"`
	Table *GooglePrivacyDlpV2BigQueryTable `json:"table,omitempty"`
}
