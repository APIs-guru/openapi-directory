package shared



type ListConsumerQuotaMetricsResponse struct {
    Metrics []ConsumerQuotaMetric `json:"metrics,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

