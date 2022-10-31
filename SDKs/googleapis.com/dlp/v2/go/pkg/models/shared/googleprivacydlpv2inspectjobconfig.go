package shared

type GooglePrivacyDlpV2InspectJobConfig struct {
	Actions             []GooglePrivacyDlpV2Action       `json:"actions,omitempty"`
	InspectConfig       *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
	InspectTemplateName *string                          `json:"inspectTemplateName,omitempty"`
	StorageConfig       *GooglePrivacyDlpV2StorageConfig `json:"storageConfig,omitempty"`
}
