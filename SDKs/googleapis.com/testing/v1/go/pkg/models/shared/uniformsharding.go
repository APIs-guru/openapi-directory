package shared

// UniformSharding
// Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.
type UniformSharding struct {
	NumShards *int32 `json:"numShards,omitempty"`
}
