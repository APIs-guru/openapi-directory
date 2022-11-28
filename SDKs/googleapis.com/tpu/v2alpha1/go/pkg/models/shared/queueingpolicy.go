package shared

// QueueingPolicy
// Defines the policy of the QueuedRequest.
type QueueingPolicy struct {
	ValidAfterDuration *string   `json:"validAfterDuration,omitempty"`
	ValidAfterTime     *string   `json:"validAfterTime,omitempty"`
	ValidInterval      *Interval `json:"validInterval,omitempty"`
	ValidUntilDuration *string   `json:"validUntilDuration,omitempty"`
	ValidUntilTime     *string   `json:"validUntilTime,omitempty"`
}
