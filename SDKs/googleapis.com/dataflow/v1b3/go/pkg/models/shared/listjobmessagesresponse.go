package shared



type ListJobMessagesResponse struct {
    AutoscalingEvents []AutoscalingEvent `json:"autoscalingEvents,omitempty"`
    JobMessages []JobMessage `json:"jobMessages,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

