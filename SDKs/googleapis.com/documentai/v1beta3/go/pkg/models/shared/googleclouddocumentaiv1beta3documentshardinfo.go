package shared

// GoogleCloudDocumentaiV1beta3DocumentShardInfo
// For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
type GoogleCloudDocumentaiV1beta3DocumentShardInfo struct {
	ShardCount *string `json:"shardCount,omitempty"`
	ShardIndex *string `json:"shardIndex,omitempty"`
	TextOffset *string `json:"textOffset,omitempty"`
}
