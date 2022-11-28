package shared

// GoogleCloudDataplexV1EntityCompatibilityStatus
// Provides compatibility information for various metadata stores.
type GoogleCloudDataplexV1EntityCompatibilityStatus struct {
	Bigquery      *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"bigquery,omitempty"`
	HiveMetastore *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"hiveMetastore,omitempty"`
}
