package shared

type GooglePrivacyDlpV2StorageConfig struct {
	BigQueryOptions     *GooglePrivacyDlpV2BigQueryOptions     `json:"bigQueryOptions,omitempty"`
	CloudStorageOptions *GooglePrivacyDlpV2CloudStorageOptions `json:"cloudStorageOptions,omitempty"`
	DatastoreOptions    *GooglePrivacyDlpV2DatastoreOptions    `json:"datastoreOptions,omitempty"`
	HybridOptions       *GooglePrivacyDlpV2HybridOptions       `json:"hybridOptions,omitempty"`
	TimespanConfig      *GooglePrivacyDlpV2TimespanConfig      `json:"timespanConfig,omitempty"`
}
