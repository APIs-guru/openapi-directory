package shared

type Activities struct {
	Filters     []DimensionValue `json:"filters"`
	Kind        *string          `json:"kind"`
	MetricNames []string         `json:"metricNames"`
}
