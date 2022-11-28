package shared

// ListTopicsResponse
// Response for ListTopics.
type ListTopicsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Topics        []Topic `json:"topics,omitempty"`
}
