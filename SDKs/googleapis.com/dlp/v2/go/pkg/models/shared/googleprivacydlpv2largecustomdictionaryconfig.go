package shared

type GooglePrivacyDlpV2LargeCustomDictionaryConfig struct {
	BigQueryField       *GooglePrivacyDlpV2BigQueryField       `json:"bigQueryField,omitempty"`
	CloudStorageFileSet *GooglePrivacyDlpV2CloudStorageFileSet `json:"cloudStorageFileSet,omitempty"`
	OutputPath          *GooglePrivacyDlpV2CloudStoragePath    `json:"outputPath,omitempty"`
}
