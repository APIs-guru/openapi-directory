package shared

// ListMetricDescriptorsResponse
// The ListMetricDescriptors response.
type ListMetricDescriptorsResponse struct {
	MetricDescriptors []MetricDescriptor `json:"metricDescriptors,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
