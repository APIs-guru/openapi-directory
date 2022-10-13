package shared

type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries struct {
	IntervalDuration *string                                                                      `json:"intervalDuration"`
	Points           []GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval `json:"points"`
}
