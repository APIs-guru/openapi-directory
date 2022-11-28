package shared

// GooglePrivacyDlpV2InspectJobConfig
// Controls what and how to inspect for findings.
type GooglePrivacyDlpV2InspectJobConfig struct {
	Actions             []GooglePrivacyDlpV2Action       `json:"actions,omitempty"`
	InspectConfig       *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
	InspectTemplateName *string                          `json:"inspectTemplateName,omitempty"`
	StorageConfig       *GooglePrivacyDlpV2StorageConfig `json:"storageConfig,omitempty"`
}
