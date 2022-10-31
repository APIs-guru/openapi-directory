package shared



type ProgressTimeseries struct {
    CurrentProgress *float64 `json:"currentProgress,omitempty"`
    DataPoints []Point `json:"dataPoints,omitempty"`
    
}

