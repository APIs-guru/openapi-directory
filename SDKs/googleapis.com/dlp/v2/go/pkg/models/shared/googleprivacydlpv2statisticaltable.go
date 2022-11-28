package shared

// GooglePrivacyDlpV2StatisticalTable
// An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
type GooglePrivacyDlpV2StatisticalTable struct {
	QuasiIds          []GooglePrivacyDlpV2QuasiIdentifierField `json:"quasiIds,omitempty"`
	RelativeFrequency *GooglePrivacyDlpV2FieldID               `json:"relativeFrequency,omitempty"`
	Table             *GooglePrivacyDlpV2BigQueryTable         `json:"table,omitempty"`
}
