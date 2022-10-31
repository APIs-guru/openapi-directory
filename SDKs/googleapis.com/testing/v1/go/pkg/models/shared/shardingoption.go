package shared



type ShardingOption struct {
    ManualSharding *ManualSharding `json:"manualSharding,omitempty"`
    UniformSharding *UniformSharding `json:"uniformSharding,omitempty"`
    
}

