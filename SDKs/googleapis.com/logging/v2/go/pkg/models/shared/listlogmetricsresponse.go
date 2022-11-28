package shared

// ListLogMetricsResponse
// Result returned from ListLogMetrics.
type ListLogMetricsResponse struct {
	Metrics       []LogMetric `json:"metrics,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
