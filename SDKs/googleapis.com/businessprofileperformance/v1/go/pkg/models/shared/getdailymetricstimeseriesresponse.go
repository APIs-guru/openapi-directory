package shared

// GetDailyMetricsTimeSeriesResponse
// Represents the response for GetDailyMetricsTimeSeries.
type GetDailyMetricsTimeSeriesResponse struct {
	TimeSeries *TimeSeries `json:"timeSeries,omitempty"`
}
