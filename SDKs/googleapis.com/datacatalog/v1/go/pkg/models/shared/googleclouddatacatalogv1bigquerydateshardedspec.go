package shared

// GoogleCloudDatacatalogV1BigQueryDateShardedSpec
// Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).
type GoogleCloudDatacatalogV1BigQueryDateShardedSpec struct {
	Dataset             *string `json:"dataset,omitempty"`
	LatestShardResource *string `json:"latestShardResource,omitempty"`
	ShardCount          *string `json:"shardCount,omitempty"`
	TablePrefix         *string `json:"tablePrefix,omitempty"`
}
