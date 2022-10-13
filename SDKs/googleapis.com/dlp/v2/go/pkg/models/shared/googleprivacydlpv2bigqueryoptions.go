package shared

type GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum string

const (
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumSampleMethodUnspecified GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "SAMPLE_METHOD_UNSPECIFIED"
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumTop                     GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "TOP"
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumRandomStart             GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "RANDOM_START"
)

type GooglePrivacyDlpV2BigQueryOptions struct {
	ExcludedFields    []GooglePrivacyDlpV2FieldID                        `json:"excludedFields"`
	IdentifyingFields []GooglePrivacyDlpV2FieldID                        `json:"identifyingFields"`
	IncludedFields    []GooglePrivacyDlpV2FieldID                        `json:"includedFields"`
	RowsLimit         *string                                            `json:"rowsLimit"`
	RowsLimitPercent  *int32                                             `json:"rowsLimitPercent"`
	SampleMethod      *GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum `json:"sampleMethod"`
	TableReference    *GooglePrivacyDlpV2BigQueryTable                   `json:"tableReference"`
}
