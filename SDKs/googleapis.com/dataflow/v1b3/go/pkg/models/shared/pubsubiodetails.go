package shared

// PubSubIoDetails
// Metadata for a Pub/Sub connector used by the job.
type PubSubIoDetails struct {
	Subscription *string `json:"subscription,omitempty"`
	Topic        *string `json:"topic,omitempty"`
}
