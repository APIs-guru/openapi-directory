package shared

type GooglePrivacyDlpV2LargeCustomDictionaryConfig struct {
	BigQueryField       *GooglePrivacyDlpV2BigQueryField       `json:"bigQueryField"`
	CloudStorageFileSet *GooglePrivacyDlpV2CloudStorageFileSet `json:"cloudStorageFileSet"`
	OutputPath          *GooglePrivacyDlpV2CloudStoragePath    `json:"outputPath"`
}
