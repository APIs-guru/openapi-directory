package shared

// ReceivedMessage
// A message and its corresponding acknowledgment ID.
type ReceivedMessage struct {
	AckID   *string        `json:"ackId,omitempty"`
	Message *PubsubMessage `json:"message,omitempty"`
}
