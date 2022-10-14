package shared

type PublishRequest struct {
	Message *PubsubMessage `json:"message,omitempty"`
	Topic   *string        `json:"topic,omitempty"`
}
