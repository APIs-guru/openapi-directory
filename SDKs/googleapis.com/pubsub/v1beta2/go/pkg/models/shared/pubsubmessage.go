package shared

// PubsubMessage
// A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
type PubsubMessage struct {
	Attributes  map[string]string `json:"attributes,omitempty"`
	Data        *string           `json:"data,omitempty"`
	MessageID   *string           `json:"messageId,omitempty"`
	PublishTime *string           `json:"publishTime,omitempty"`
}
