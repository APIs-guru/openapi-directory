package shared

type ProgressTimeseries struct {
	CurrentProgress *float64 `json:"currentProgress"`
	DataPoints      []Point  `json:"dataPoints"`
}
