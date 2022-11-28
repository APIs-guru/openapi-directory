package shared

// ListJobMessagesResponse
// Response to a request to list job messages.
type ListJobMessagesResponse struct {
	AutoscalingEvents []AutoscalingEvent `json:"autoscalingEvents,omitempty"`
	JobMessages       []JobMessage       `json:"jobMessages,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
