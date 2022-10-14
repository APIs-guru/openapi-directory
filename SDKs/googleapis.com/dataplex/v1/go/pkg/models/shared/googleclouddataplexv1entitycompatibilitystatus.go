package shared

type GoogleCloudDataplexV1EntityCompatibilityStatus struct {
	Bigquery      *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"bigquery,omitempty"`
	HiveMetastore *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"hiveMetastore,omitempty"`
}
