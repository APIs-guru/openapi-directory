package shared

type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries struct {
	IntervalDuration *string                                                                      `json:"intervalDuration,omitempty"`
	Points           []GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval `json:"points,omitempty"`
}
