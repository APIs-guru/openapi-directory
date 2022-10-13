package shared

type QueryTimeSeriesResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	PartialErrors        []Status              `json:"partialErrors"`
	TimeSeriesData       []TimeSeriesData      `json:"timeSeriesData"`
	TimeSeriesDescriptor *TimeSeriesDescriptor `json:"timeSeriesDescriptor"`
}
