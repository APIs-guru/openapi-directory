package shared

// LatencyPercentile
// Latency percentile rank and value.
type LatencyPercentile struct {
	LatencyMicros *string `json:"latencyMicros,omitempty"`
	Percent       *int32  `json:"percent,omitempty"`
}
