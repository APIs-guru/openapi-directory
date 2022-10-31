package shared

type GooglePrivacyDlpV2TaggedField struct {
	CustomTag *string                     `json:"customTag,omitempty"`
	Field     *GooglePrivacyDlpV2FieldID  `json:"field,omitempty"`
	Inferred  map[string]interface{}      `json:"inferred,omitempty"`
	InfoType  *GooglePrivacyDlpV2InfoType `json:"infoType,omitempty"`
}
