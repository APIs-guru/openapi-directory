package shared

type GooglePrivacyDlpV2FieldTransformation struct {
	Condition               *GooglePrivacyDlpV2RecordCondition         `json:"condition"`
	Fields                  []GooglePrivacyDlpV2FieldID                `json:"fields"`
	InfoTypeTransformations *GooglePrivacyDlpV2InfoTypeTransformations `json:"infoTypeTransformations"`
	PrimitiveTransformation *GooglePrivacyDlpV2PrimitiveTransformation `json:"primitiveTransformation"`
}
