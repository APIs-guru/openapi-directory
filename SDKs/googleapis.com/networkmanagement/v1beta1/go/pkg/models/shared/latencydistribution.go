package shared



type LatencyDistribution struct {
    LatencyPercentiles []LatencyPercentile `json:"latencyPercentiles,omitempty"`
    
}

