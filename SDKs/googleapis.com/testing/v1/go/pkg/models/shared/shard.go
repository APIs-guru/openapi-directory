package shared

type Shard struct {
	NumShards           *int32               `json:"numShards,omitempty"`
	ShardIndex          *int32               `json:"shardIndex,omitempty"`
	TestTargetsForShard *TestTargetsForShard `json:"testTargetsForShard,omitempty"`
}
