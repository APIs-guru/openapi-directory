package shared

// GooglePrivacyDlpV2RecordTransformations
// A type of transformation that is applied over structured data such as a table.
type GooglePrivacyDlpV2RecordTransformations struct {
	FieldTransformations []GooglePrivacyDlpV2FieldTransformation `json:"fieldTransformations,omitempty"`
	RecordSuppressions   []GooglePrivacyDlpV2RecordSuppression   `json:"recordSuppressions,omitempty"`
}
