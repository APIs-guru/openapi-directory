package shared

// Metrics
// Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
type Metrics struct {
	ActiveUsers      []MetricsValue `json:"activeUsers,omitempty"`
	FailedExecutions []MetricsValue `json:"failedExecutions,omitempty"`
	TotalExecutions  []MetricsValue `json:"totalExecutions,omitempty"`
}
