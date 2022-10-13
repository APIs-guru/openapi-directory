package shared

type Quota struct {
	Limits      []QuotaLimit `json:"limits"`
	MetricRules []MetricRule `json:"metricRules"`
}
