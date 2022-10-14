package shared

type PubsubMessage struct {
	Attributes  map[string]string `json:"attributes,omitempty"`
	Data        *string           `json:"data,omitempty"`
	MessageID   *string           `json:"messageId,omitempty"`
	OrderingKey *string           `json:"orderingKey,omitempty"`
	PublishTime *string           `json:"publishTime,omitempty"`
}
