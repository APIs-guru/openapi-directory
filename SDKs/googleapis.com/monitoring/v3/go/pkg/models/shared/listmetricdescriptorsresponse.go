package shared



type ListMetricDescriptorsResponse struct {
    MetricDescriptors []MetricDescriptor `json:"metricDescriptors,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

