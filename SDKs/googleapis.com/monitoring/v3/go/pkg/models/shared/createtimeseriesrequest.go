package shared

// CreateTimeSeriesRequest
// The CreateTimeSeries request.
type CreateTimeSeriesRequest struct {
	TimeSeries []TimeSeries `json:"timeSeries,omitempty"`
}
