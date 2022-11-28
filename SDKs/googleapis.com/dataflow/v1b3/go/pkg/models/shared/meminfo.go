package shared

// MemInfo
// Information about the memory usage of a worker or a container within a worker.
type MemInfo struct {
	CurrentLimitBytes *string `json:"currentLimitBytes,omitempty"`
	CurrentOoms       *string `json:"currentOoms,omitempty"`
	CurrentRssBytes   *string `json:"currentRssBytes,omitempty"`
	Timestamp         *string `json:"timestamp,omitempty"`
	TotalGbMs         *string `json:"totalGbMs,omitempty"`
}
