package shared

type ListTimeSeriesResponse struct {
	ExecutionErrors []Status     `json:"executionErrors"`
	NextPageToken   *string      `json:"nextPageToken"`
	TimeSeries      []TimeSeries `json:"timeSeries"`
	Unit            *string      `json:"unit"`
}
