package shared

type LatencyPercentile struct {
	LatencyMicros *string `json:"latencyMicros"`
	Percent       *int32  `json:"percent"`
}
