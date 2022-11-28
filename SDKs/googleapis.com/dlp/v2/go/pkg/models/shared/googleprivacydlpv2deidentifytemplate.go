package shared

// GooglePrivacyDlpV2DeidentifyTemplate
// DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
type GooglePrivacyDlpV2DeidentifyTemplate struct {
	CreateTime       *string                             `json:"createTime,omitempty"`
	DeidentifyConfig *GooglePrivacyDlpV2DeidentifyConfig `json:"deidentifyConfig,omitempty"`
	Description      *string                             `json:"description,omitempty"`
	DisplayName      *string                             `json:"displayName,omitempty"`
	Name             *string                             `json:"name,omitempty"`
	UpdateTime       *string                             `json:"updateTime,omitempty"`
}

// GooglePrivacyDlpV2DeidentifyTemplateInput
// DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
type GooglePrivacyDlpV2DeidentifyTemplateInput struct {
	DeidentifyConfig *GooglePrivacyDlpV2DeidentifyConfig `json:"deidentifyConfig,omitempty"`
	Description      *string                             `json:"description,omitempty"`
	DisplayName      *string                             `json:"displayName,omitempty"`
}
