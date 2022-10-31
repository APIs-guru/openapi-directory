package shared



type BasicMetricsRequest struct {
    MetricRequests []MetricRequest `json:"metricRequests,omitempty"`
    TimeRange *TimeRange `json:"timeRange,omitempty"`
    
}

