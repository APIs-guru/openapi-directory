package shared

type Quota struct {
	Limits      []QuotaLimit `json:"limits,omitempty"`
	MetricRules []MetricRule `json:"metricRules,omitempty"`
}
