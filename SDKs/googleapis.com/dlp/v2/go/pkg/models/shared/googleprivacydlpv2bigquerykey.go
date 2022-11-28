package shared

// GooglePrivacyDlpV2BigQueryKey
// Row key for identifying a record in BigQuery table.
type GooglePrivacyDlpV2BigQueryKey struct {
	RowNumber      *string                          `json:"rowNumber,omitempty"`
	TableReference *GooglePrivacyDlpV2BigQueryTable `json:"tableReference,omitempty"`
}
