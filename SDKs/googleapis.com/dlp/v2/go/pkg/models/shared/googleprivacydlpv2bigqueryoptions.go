package shared

type GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum string

const (
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumSampleMethodUnspecified GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "SAMPLE_METHOD_UNSPECIFIED"
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumTop                     GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "TOP"
	GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnumRandomStart             GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum = "RANDOM_START"
)

type GooglePrivacyDlpV2BigQueryOptions struct {
	ExcludedFields    []GooglePrivacyDlpV2FieldID                        `json:"excludedFields,omitempty"`
	IdentifyingFields []GooglePrivacyDlpV2FieldID                        `json:"identifyingFields,omitempty"`
	IncludedFields    []GooglePrivacyDlpV2FieldID                        `json:"includedFields,omitempty"`
	RowsLimit         *string                                            `json:"rowsLimit,omitempty"`
	RowsLimitPercent  *int32                                             `json:"rowsLimitPercent,omitempty"`
	SampleMethod      *GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum `json:"sampleMethod,omitempty"`
	TableReference    *GooglePrivacyDlpV2BigQueryTable                   `json:"tableReference,omitempty"`
}
