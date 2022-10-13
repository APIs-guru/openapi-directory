package shared

type PublishRequest struct {
	Message *PubsubMessage `json:"message"`
	Topic   *string        `json:"topic"`
}
