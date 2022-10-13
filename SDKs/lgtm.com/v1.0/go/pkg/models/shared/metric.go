package shared

type Metric struct {
	Measurements []Measurement `json:"measurements"`
	MetricID     *string       `json:"metric-id"`
}
