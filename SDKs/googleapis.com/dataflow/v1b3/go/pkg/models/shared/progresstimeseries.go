package shared

// ProgressTimeseries
// Information about the progress of some component of job execution.
type ProgressTimeseries struct {
	CurrentProgress *float64 `json:"currentProgress,omitempty"`
	DataPoints      []Point  `json:"dataPoints,omitempty"`
}
