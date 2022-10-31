package shared

type PubsubMessage struct {
	Data        *string `json:"data,omitempty"`
	Label       []Label `json:"label,omitempty"`
	MessageID   *string `json:"messageId,omitempty"`
	PublishTime *string `json:"publishTime,omitempty"`
}
