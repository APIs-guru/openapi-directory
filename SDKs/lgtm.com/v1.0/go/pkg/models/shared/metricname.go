package shared

type MetricName struct {
	Description *string `json:"description,omitempty"`
	MetricID    *string `json:"metric-id,omitempty"`
}
