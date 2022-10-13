package shared

type GooglePrivacyDlpV2InfoTypeTransformation struct {
	InfoTypes               []GooglePrivacyDlpV2InfoType               `json:"infoTypes"`
	PrimitiveTransformation *GooglePrivacyDlpV2PrimitiveTransformation `json:"primitiveTransformation"`
}
