package shared

type ShardSummary struct {
	Runs        []map[string]interface{} `json:"runs"`
	ShardResult *MergedResult            `json:"shardResult"`
}
