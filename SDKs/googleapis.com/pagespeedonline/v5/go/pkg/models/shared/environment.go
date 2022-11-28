package shared

// Environment
// Message containing environment configuration for a Lighthouse run.
type Environment struct {
	BenchmarkIndex   *float64 `json:"benchmarkIndex,omitempty"`
	HostUserAgent    *string  `json:"hostUserAgent,omitempty"`
	NetworkUserAgent *string  `json:"networkUserAgent,omitempty"`
}
