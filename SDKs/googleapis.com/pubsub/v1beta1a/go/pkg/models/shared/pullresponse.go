package shared

// PullResponse
// Either a PubsubMessage or a truncation event. One of these two must be populated.
type PullResponse struct {
	AckID       *string      `json:"ackId,omitempty"`
	PubsubEvent *PubsubEvent `json:"pubsubEvent,omitempty"`
}
