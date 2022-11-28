package shared

// GooglePrivacyDlpV2InspectTemplateInput
// The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
type GooglePrivacyDlpV2InspectTemplateInput struct {
	Description   *string                          `json:"description,omitempty"`
	DisplayName   *string                          `json:"displayName,omitempty"`
	InspectConfig *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
}

// GooglePrivacyDlpV2InspectTemplate
// The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
type GooglePrivacyDlpV2InspectTemplate struct {
	CreateTime    *string                          `json:"createTime,omitempty"`
	Description   *string                          `json:"description,omitempty"`
	DisplayName   *string                          `json:"displayName,omitempty"`
	InspectConfig *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
	Name          *string                          `json:"name,omitempty"`
	UpdateTime    *string                          `json:"updateTime,omitempty"`
}
