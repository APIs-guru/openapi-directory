package shared

// ListTimeSeriesResponse
// The ListTimeSeries response.
type ListTimeSeriesResponse struct {
	ExecutionErrors []Status     `json:"executionErrors,omitempty"`
	NextPageToken   *string      `json:"nextPageToken,omitempty"`
	TimeSeries      []TimeSeries `json:"timeSeries,omitempty"`
	Unit            *string      `json:"unit,omitempty"`
}
