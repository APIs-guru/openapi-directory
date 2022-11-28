package shared

// PublishBatchRequest
// Request for the PublishBatch method.
type PublishBatchRequest struct {
	Messages []PubsubMessage `json:"messages,omitempty"`
	Topic    *string         `json:"topic,omitempty"`
}
