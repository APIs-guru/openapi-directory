package shared

type GoogleCloudDatacatalogV1BigQueryDateShardedSpec struct {
	Dataset             *string `json:"dataset"`
	LatestShardResource *string `json:"latestShardResource"`
	ShardCount          *string `json:"shardCount"`
	TablePrefix         *string `json:"tablePrefix"`
}
