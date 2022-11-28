package shared

// PubsubMessage
// A message data and its labels.
type PubsubMessage struct {
	Data        *string `json:"data,omitempty"`
	Label       []Label `json:"label,omitempty"`
	MessageID   *string `json:"messageId,omitempty"`
	PublishTime *string `json:"publishTime,omitempty"`
}
