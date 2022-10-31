package shared

type ShardSummary struct {
	Runs        []map[string]interface{} `json:"runs,omitempty"`
	ShardResult *MergedResult            `json:"shardResult,omitempty"`
}
