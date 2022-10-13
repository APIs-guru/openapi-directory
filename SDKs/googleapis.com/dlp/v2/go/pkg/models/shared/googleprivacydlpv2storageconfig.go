package shared

type GooglePrivacyDlpV2StorageConfig struct {
	BigQueryOptions     *GooglePrivacyDlpV2BigQueryOptions     `json:"bigQueryOptions"`
	CloudStorageOptions *GooglePrivacyDlpV2CloudStorageOptions `json:"cloudStorageOptions"`
	DatastoreOptions    *GooglePrivacyDlpV2DatastoreOptions    `json:"datastoreOptions"`
	HybridOptions       *GooglePrivacyDlpV2HybridOptions       `json:"hybridOptions"`
	TimespanConfig      *GooglePrivacyDlpV2TimespanConfig      `json:"timespanConfig"`
}
