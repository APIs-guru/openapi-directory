package shared

// ShardingOption
// Options for enabling sharding.
type ShardingOption struct {
	ManualSharding  *ManualSharding  `json:"manualSharding,omitempty"`
	UniformSharding *UniformSharding `json:"uniformSharding,omitempty"`
}
