package shared

type GooglePrivacyDlpV2TransformationSummary struct {
	Field                *GooglePrivacyDlpV2FieldID                 `json:"field"`
	FieldTransformations []GooglePrivacyDlpV2FieldTransformation    `json:"fieldTransformations"`
	InfoType             *GooglePrivacyDlpV2InfoType                `json:"infoType"`
	RecordSuppress       *GooglePrivacyDlpV2RecordSuppression       `json:"recordSuppress"`
	Results              []GooglePrivacyDlpV2SummaryResult          `json:"results"`
	Transformation       *GooglePrivacyDlpV2PrimitiveTransformation `json:"transformation"`
	TransformedBytes     *string                                    `json:"transformedBytes"`
}
