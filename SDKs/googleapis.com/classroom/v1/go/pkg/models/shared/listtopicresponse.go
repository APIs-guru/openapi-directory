package shared

type ListTopicResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Topic         []Topic `json:"topic"`
}
