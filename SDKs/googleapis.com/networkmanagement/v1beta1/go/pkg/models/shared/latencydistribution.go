package shared

// LatencyDistribution
// Describes measured latency distribution.
type LatencyDistribution struct {
	LatencyPercentiles []LatencyPercentile `json:"latencyPercentiles,omitempty"`
}
