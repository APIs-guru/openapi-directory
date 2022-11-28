package shared

// ListTopicResponse
// Response when listing topics.
type ListTopicResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Topic         []Topic `json:"topic,omitempty"`
}
