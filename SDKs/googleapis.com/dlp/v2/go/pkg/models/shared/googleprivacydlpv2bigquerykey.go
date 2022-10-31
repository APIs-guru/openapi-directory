package shared

type GooglePrivacyDlpV2BigQueryKey struct {
	RowNumber      *string                          `json:"rowNumber,omitempty"`
	TableReference *GooglePrivacyDlpV2BigQueryTable `json:"tableReference,omitempty"`
}
