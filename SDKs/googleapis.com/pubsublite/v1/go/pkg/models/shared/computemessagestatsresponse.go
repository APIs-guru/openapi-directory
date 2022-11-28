package shared

// ComputeMessageStatsResponse
// Response containing stats for messages in the requested topic and partition.
type ComputeMessageStatsResponse struct {
	MessageBytes       *string `json:"messageBytes,omitempty"`
	MessageCount       *string `json:"messageCount,omitempty"`
	MinimumEventTime   *string `json:"minimumEventTime,omitempty"`
	MinimumPublishTime *string `json:"minimumPublishTime,omitempty"`
}
