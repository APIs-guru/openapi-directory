package shared

type CreateTimeSeriesRequest struct {
	TimeSeries []TimeSeries `json:"timeSeries"`
}
