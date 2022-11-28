package shared

// Shard
// Output only. Details about the shard.
type Shard struct {
	NumShards           *int32               `json:"numShards,omitempty"`
	ShardIndex          *int32               `json:"shardIndex,omitempty"`
	TestTargetsForShard *TestTargetsForShard `json:"testTargetsForShard,omitempty"`
}
