package shared

// PubsubMessage
// A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
type PubsubMessage struct {
	Attributes  map[string]string `json:"attributes,omitempty"`
	Data        *string           `json:"data,omitempty"`
	MessageID   *string           `json:"messageId,omitempty"`
	OrderingKey *string           `json:"orderingKey,omitempty"`
	PublishTime *string           `json:"publishTime,omitempty"`
}
