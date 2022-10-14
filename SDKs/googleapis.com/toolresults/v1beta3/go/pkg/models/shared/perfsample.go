package shared

type PerfSample struct {
	SampleTime *Timestamp `json:"sampleTime,omitempty"`
	Value      *float64   `json:"value,omitempty"`
}
