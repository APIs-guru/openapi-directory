package shared



type ClusterConfigurationRouting struct {
    CostPerMeter *float64 `json:"cost_per_meter,omitempty"`
    CostPerSecond *float64 `json:"cost_per_second,omitempty"`
    Profile *string `json:"profile,omitempty"`
    
}

