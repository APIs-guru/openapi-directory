package shared

// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
// A time series representing conversations over time.
type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries struct {
	IntervalDuration *string                                                                      `json:"intervalDuration,omitempty"`
	Points           []GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval `json:"points,omitempty"`
}
