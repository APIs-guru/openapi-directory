package shared

type GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec struct {
	Dataset     *string `json:"dataset"`
	ShardCount  *string `json:"shardCount"`
	TablePrefix *string `json:"tablePrefix"`
}
