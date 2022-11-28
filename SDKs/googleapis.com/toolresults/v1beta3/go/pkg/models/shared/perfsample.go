package shared

// PerfSample
// Resource representing a single performance measure or data point
type PerfSample struct {
	SampleTime *Timestamp `json:"sampleTime,omitempty"`
	Value      *float64   `json:"value,omitempty"`
}
