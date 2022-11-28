package shared

// PubsubTarget
// Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
type PubsubTarget struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	Data       *string           `json:"data,omitempty"`
	TopicName  *string           `json:"topicName,omitempty"`
}
