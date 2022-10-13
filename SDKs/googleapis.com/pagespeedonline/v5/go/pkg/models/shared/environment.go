package shared

type Environment struct {
	BenchmarkIndex   *float64 `json:"benchmarkIndex"`
	HostUserAgent    *string  `json:"hostUserAgent"`
	NetworkUserAgent *string  `json:"networkUserAgent"`
}
