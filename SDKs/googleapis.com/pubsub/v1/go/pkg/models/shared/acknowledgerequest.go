package shared

// AcknowledgeRequest
// Request for the Acknowledge method.
type AcknowledgeRequest struct {
	AckIds []string `json:"ackIds,omitempty"`
}
