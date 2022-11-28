package shared

// Pubsub
// Represents a Pub/Sub transport.
type Pubsub struct {
	Subscription *string `json:"subscription,omitempty"`
	Topic        *string `json:"topic,omitempty"`
}

// PubsubInput
// Represents a Pub/Sub transport.
type PubsubInput struct {
	Topic *string `json:"topic,omitempty"`
}
