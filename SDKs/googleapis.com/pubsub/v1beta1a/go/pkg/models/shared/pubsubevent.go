package shared

type PubsubEvent struct {
	Deleted      *bool          `json:"deleted"`
	Message      *PubsubMessage `json:"message"`
	Subscription *string        `json:"subscription"`
	Truncated    *bool          `json:"truncated"`
}
