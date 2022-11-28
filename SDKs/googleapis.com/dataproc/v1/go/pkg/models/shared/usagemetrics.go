package shared

// UsageMetrics
// Usage metrics represent approximate total resources consumed by a workload.
type UsageMetrics struct {
	MilliDcuSeconds         *string `json:"milliDcuSeconds,omitempty"`
	ShuffleStorageGbSeconds *string `json:"shuffleStorageGbSeconds,omitempty"`
}
