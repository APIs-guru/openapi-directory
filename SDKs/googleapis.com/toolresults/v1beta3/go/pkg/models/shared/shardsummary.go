package shared

// ShardSummary
// Result summary for a shard in an environment.
type ShardSummary struct {
	Runs        []map[string]interface{} `json:"runs,omitempty"`
	ShardResult *MergedResult            `json:"shardResult,omitempty"`
}
