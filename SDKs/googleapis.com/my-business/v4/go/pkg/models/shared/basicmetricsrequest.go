package shared

type BasicMetricsRequest struct {
	MetricRequests []MetricRequest `json:"metricRequests"`
	TimeRange      *TimeRange      `json:"timeRange"`
}
