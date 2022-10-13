package shared

type GoogleCloudDocumentaiV1DocumentShardInfo struct {
	ShardCount *string `json:"shardCount"`
	ShardIndex *string `json:"shardIndex"`
	TextOffset *string `json:"textOffset"`
}
