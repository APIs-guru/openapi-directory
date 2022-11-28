package shared

// GooglePrivacyDlpV2InfoTypeTransformation
// A transformation to apply to text that is identified as a specific info_type.
type GooglePrivacyDlpV2InfoTypeTransformation struct {
	InfoTypes               []GooglePrivacyDlpV2InfoType               `json:"infoTypes,omitempty"`
	PrimitiveTransformation *GooglePrivacyDlpV2PrimitiveTransformation `json:"primitiveTransformation,omitempty"`
}
