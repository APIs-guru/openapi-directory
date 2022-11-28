package shared

// ListConsumerQuotaMetricsResponse
// Response message for ListConsumerQuotaMetrics
type ListConsumerQuotaMetricsResponse struct {
	Metrics       []ConsumerQuotaMetric `json:"metrics,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
}
