package shared

// GooglePrivacyDlpV2TransformationSummary
// Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
type GooglePrivacyDlpV2TransformationSummary struct {
	Field                *GooglePrivacyDlpV2FieldID                 `json:"field,omitempty"`
	FieldTransformations []GooglePrivacyDlpV2FieldTransformation    `json:"fieldTransformations,omitempty"`
	InfoType             *GooglePrivacyDlpV2InfoType                `json:"infoType,omitempty"`
	RecordSuppress       *GooglePrivacyDlpV2RecordSuppression       `json:"recordSuppress,omitempty"`
	Results              []GooglePrivacyDlpV2SummaryResult          `json:"results,omitempty"`
	Transformation       *GooglePrivacyDlpV2PrimitiveTransformation `json:"transformation,omitempty"`
	TransformedBytes     *string                                    `json:"transformedBytes,omitempty"`
}
