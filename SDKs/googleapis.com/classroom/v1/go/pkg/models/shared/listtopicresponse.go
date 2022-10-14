package shared

type ListTopicResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Topic         []Topic `json:"topic,omitempty"`
}
