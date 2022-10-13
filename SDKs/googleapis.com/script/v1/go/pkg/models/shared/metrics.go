package shared

type Metrics struct {
	ActiveUsers      []MetricsValue `json:"activeUsers"`
	FailedExecutions []MetricsValue `json:"failedExecutions"`
	TotalExecutions  []MetricsValue `json:"totalExecutions"`
}
