package shared

type ComputeMessageStatsResponse struct {
	MessageBytes       *string `json:"messageBytes"`
	MessageCount       *string `json:"messageCount"`
	MinimumEventTime   *string `json:"minimumEventTime"`
	MinimumPublishTime *string `json:"minimumPublishTime"`
}
