package shared

type GoogleCloudDocumentaiV1beta3DocumentShardInfo struct {
	ShardCount *string `json:"shardCount,omitempty"`
	ShardIndex *string `json:"shardIndex,omitempty"`
	TextOffset *string `json:"textOffset,omitempty"`
}
