package shared

type GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec struct {
	Dataset     *string `json:"dataset,omitempty"`
	ShardCount  *string `json:"shardCount,omitempty"`
	TablePrefix *string `json:"tablePrefix,omitempty"`
}
