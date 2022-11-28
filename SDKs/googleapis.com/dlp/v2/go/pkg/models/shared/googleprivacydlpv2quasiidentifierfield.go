package shared

// GooglePrivacyDlpV2QuasiIdentifierField
// A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
type GooglePrivacyDlpV2QuasiIdentifierField struct {
	CustomTag *string                    `json:"customTag,omitempty"`
	Field     *GooglePrivacyDlpV2FieldID `json:"field,omitempty"`
}
