package shared

type PerfSample struct {
	SampleTime *Timestamp `json:"sampleTime"`
	Value      *float64   `json:"value"`
}
