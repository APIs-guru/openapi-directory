package shared

type GooglePrivacyDlpV2FieldTransformation struct {
	Condition               *GooglePrivacyDlpV2RecordCondition         `json:"condition,omitempty"`
	Fields                  []GooglePrivacyDlpV2FieldID                `json:"fields,omitempty"`
	InfoTypeTransformations *GooglePrivacyDlpV2InfoTypeTransformations `json:"infoTypeTransformations,omitempty"`
	PrimitiveTransformation *GooglePrivacyDlpV2PrimitiveTransformation `json:"primitiveTransformation,omitempty"`
}
