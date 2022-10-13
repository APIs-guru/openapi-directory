package shared

type GooglePrivacyDlpV2InspectJobConfig struct {
	Actions             []GooglePrivacyDlpV2Action       `json:"actions"`
	InspectConfig       *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig"`
	InspectTemplateName *string                          `json:"inspectTemplateName"`
	StorageConfig       *GooglePrivacyDlpV2StorageConfig `json:"storageConfig"`
}
