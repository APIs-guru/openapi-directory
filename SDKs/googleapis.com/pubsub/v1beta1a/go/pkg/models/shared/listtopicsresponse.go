package shared

type ListTopicsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Topic         []Topic `json:"topic,omitempty"`
}
