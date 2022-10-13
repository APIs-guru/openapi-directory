package shared

type GooglePrivacyDlpV2TaggedField struct {
	CustomTag *string                     `json:"customTag"`
	Field     *GooglePrivacyDlpV2FieldID  `json:"field"`
	Inferred  map[string]interface{}      `json:"inferred"`
	InfoType  *GooglePrivacyDlpV2InfoType `json:"infoType"`
}
