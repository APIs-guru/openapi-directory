package shared

// AcknowledgeRequest
// Request for the Acknowledge method.
type AcknowledgeRequest struct {
	AckID        []string `json:"ackId,omitempty"`
	Subscription *string  `json:"subscription,omitempty"`
}
