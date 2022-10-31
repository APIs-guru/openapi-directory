package shared

type Environment struct {
	BenchmarkIndex   *float64 `json:"benchmarkIndex,omitempty"`
	HostUserAgent    *string  `json:"hostUserAgent,omitempty"`
	NetworkUserAgent *string  `json:"networkUserAgent,omitempty"`
}
