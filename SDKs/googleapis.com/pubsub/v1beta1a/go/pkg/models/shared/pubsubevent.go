package shared

type PubsubEvent struct {
	Deleted      *bool          `json:"deleted,omitempty"`
	Message      *PubsubMessage `json:"message,omitempty"`
	Subscription *string        `json:"subscription,omitempty"`
	Truncated    *bool          `json:"truncated,omitempty"`
}
