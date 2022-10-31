package shared



type GoogleCloudDatacatalogV1BigQueryDateShardedSpec struct {
    Dataset *string `json:"dataset,omitempty"`
    LatestShardResource *string `json:"latestShardResource,omitempty"`
    ShardCount *string `json:"shardCount,omitempty"`
    TablePrefix *string `json:"tablePrefix,omitempty"`
    
}

