package shared

// GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval
// A single interval in a time series.
type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval struct {
	ConversationCount *int32  `json:"conversationCount,omitempty"`
	StartTime         *string `json:"startTime,omitempty"`
}
