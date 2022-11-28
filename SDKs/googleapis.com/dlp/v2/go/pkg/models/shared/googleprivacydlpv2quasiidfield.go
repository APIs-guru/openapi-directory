package shared

// GooglePrivacyDlpV2QuasiIDField
// A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
type GooglePrivacyDlpV2QuasiIDField struct {
	CustomTag *string                    `json:"customTag,omitempty"`
	Field     *GooglePrivacyDlpV2FieldID `json:"field,omitempty"`
}
