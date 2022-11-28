package shared

// ListTopicsResponse
// Response for the ListTopics method.
type ListTopicsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Topic         []Topic `json:"topic,omitempty"`
}
