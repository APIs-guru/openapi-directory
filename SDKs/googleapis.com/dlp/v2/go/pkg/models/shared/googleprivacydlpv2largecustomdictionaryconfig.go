package shared

// GooglePrivacyDlpV2LargeCustomDictionaryConfig
// Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
type GooglePrivacyDlpV2LargeCustomDictionaryConfig struct {
	BigQueryField       *GooglePrivacyDlpV2BigQueryField       `json:"bigQueryField,omitempty"`
	CloudStorageFileSet *GooglePrivacyDlpV2CloudStorageFileSet `json:"cloudStorageFileSet,omitempty"`
	OutputPath          *GooglePrivacyDlpV2CloudStoragePath    `json:"outputPath,omitempty"`
}
