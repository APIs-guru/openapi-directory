package shared

type ListConsumerQuotaMetricsResponse struct {
	Metrics       []ConsumerQuotaMetric `json:"metrics"`
	NextPageToken *string               `json:"nextPageToken"`
}
