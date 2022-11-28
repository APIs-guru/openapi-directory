package shared

// CreateCollectdTimeSeriesResponse
// The CreateCollectdTimeSeries response.
type CreateCollectdTimeSeriesResponse struct {
	PayloadErrors []CollectdPayloadError   `json:"payloadErrors,omitempty"`
	Summary       *CreateTimeSeriesSummary `json:"summary,omitempty"`
}
