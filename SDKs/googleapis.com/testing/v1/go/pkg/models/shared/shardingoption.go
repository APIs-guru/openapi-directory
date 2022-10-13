package shared

type ShardingOption struct {
	ManualSharding  *ManualSharding  `json:"manualSharding"`
	UniformSharding *UniformSharding `json:"uniformSharding"`
}
