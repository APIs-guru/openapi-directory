package shared

// PublishRequest
// Request for the Publish method.
type PublishRequest struct {
	Message *PubsubMessage `json:"message,omitempty"`
	Topic   *string        `json:"topic,omitempty"`
}
