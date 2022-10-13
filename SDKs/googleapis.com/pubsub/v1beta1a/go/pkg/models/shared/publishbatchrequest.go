package shared

type PublishBatchRequest struct {
	Messages []PubsubMessage `json:"messages"`
	Topic    *string         `json:"topic"`
}
