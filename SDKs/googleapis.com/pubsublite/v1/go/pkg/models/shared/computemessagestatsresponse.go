package shared



type ComputeMessageStatsResponse struct {
    MessageBytes *string `json:"messageBytes,omitempty"`
    MessageCount *string `json:"messageCount,omitempty"`
    MinimumEventTime *string `json:"minimumEventTime,omitempty"`
    MinimumPublishTime *string `json:"minimumPublishTime,omitempty"`
    
}

