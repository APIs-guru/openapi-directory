package shared

type Metric struct {
	Measurements []Measurement `json:"measurements,omitempty"`
	MetricID     *string       `json:"metric-id,omitempty"`
}
