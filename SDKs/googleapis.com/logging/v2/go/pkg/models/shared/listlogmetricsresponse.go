package shared

type ListLogMetricsResponse struct {
	Metrics       []LogMetric `json:"metrics,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
