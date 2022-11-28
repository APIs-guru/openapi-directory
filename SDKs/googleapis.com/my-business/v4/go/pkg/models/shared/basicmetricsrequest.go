package shared

// BasicMetricsRequest
// A request for basic metric insights.
type BasicMetricsRequest struct {
	MetricRequests []MetricRequest `json:"metricRequests,omitempty"`
	TimeRange      *TimeRange      `json:"timeRange,omitempty"`
}
