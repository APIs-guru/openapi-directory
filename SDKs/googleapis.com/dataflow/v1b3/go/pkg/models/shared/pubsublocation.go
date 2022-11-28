package shared

// PubsubLocation
// Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
type PubsubLocation struct {
	DropLateData         *bool   `json:"dropLateData,omitempty"`
	IDLabel              *string `json:"idLabel,omitempty"`
	Subscription         *string `json:"subscription,omitempty"`
	TimestampLabel       *string `json:"timestampLabel,omitempty"`
	Topic                *string `json:"topic,omitempty"`
	TrackingSubscription *string `json:"trackingSubscription,omitempty"`
	WithAttributes       *bool   `json:"withAttributes,omitempty"`
}
