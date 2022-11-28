package shared

// ReportedParallelism
// Represents the level of parallelism in a WorkItem's input, reported by the worker.
type ReportedParallelism struct {
	IsInfinite *bool    `json:"isInfinite,omitempty"`
	Value      *float64 `json:"value,omitempty"`
}
