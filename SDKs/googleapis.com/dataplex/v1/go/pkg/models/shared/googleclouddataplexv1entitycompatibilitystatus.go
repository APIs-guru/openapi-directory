package shared

type GoogleCloudDataplexV1EntityCompatibilityStatus struct {
	Bigquery      *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"bigquery"`
	HiveMetastore *GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility `json:"hiveMetastore"`
}
