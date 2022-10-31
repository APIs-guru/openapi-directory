package shared

type GooglePrivacyDlpV2TransformationSummary struct {
	Field                *GooglePrivacyDlpV2FieldID                 `json:"field,omitempty"`
	FieldTransformations []GooglePrivacyDlpV2FieldTransformation    `json:"fieldTransformations,omitempty"`
	InfoType             *GooglePrivacyDlpV2InfoType                `json:"infoType,omitempty"`
	RecordSuppress       *GooglePrivacyDlpV2RecordSuppression       `json:"recordSuppress,omitempty"`
	Results              []GooglePrivacyDlpV2SummaryResult          `json:"results,omitempty"`
	Transformation       *GooglePrivacyDlpV2PrimitiveTransformation `json:"transformation,omitempty"`
	TransformedBytes     *string                                    `json:"transformedBytes,omitempty"`
}
