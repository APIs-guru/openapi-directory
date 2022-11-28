package shared

// GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec
// Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
type GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec struct {
	Dataset     *string `json:"dataset,omitempty"`
	ShardCount  *string `json:"shardCount,omitempty"`
	TablePrefix *string `json:"tablePrefix,omitempty"`
}
