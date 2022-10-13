package shared

type ListMetricDescriptorsResponse struct {
	MetricDescriptors []MetricDescriptor `json:"metricDescriptors"`
	NextPageToken     *string            `json:"nextPageToken"`
}
