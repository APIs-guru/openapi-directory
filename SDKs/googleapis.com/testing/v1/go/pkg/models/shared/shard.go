package shared

type Shard struct {
	NumShards           *int32               `json:"numShards"`
	ShardIndex          *int32               `json:"shardIndex"`
	TestTargetsForShard *TestTargetsForShard `json:"testTargetsForShard"`
}
