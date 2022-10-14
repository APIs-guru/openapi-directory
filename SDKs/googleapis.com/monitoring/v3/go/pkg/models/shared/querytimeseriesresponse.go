package shared

type QueryTimeSeriesResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	PartialErrors        []Status              `json:"partialErrors,omitempty"`
	TimeSeriesData       []TimeSeriesData      `json:"timeSeriesData,omitempty"`
	TimeSeriesDescriptor *TimeSeriesDescriptor `json:"timeSeriesDescriptor,omitempty"`
}
