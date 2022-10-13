package shared

type ListLogMetricsResponse struct {
	Metrics       []LogMetric `json:"metrics"`
	NextPageToken *string     `json:"nextPageToken"`
}
