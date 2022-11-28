package shared

// BatchWriteRequest
// The request for Firestore.BatchWrite.
type BatchWriteRequest struct {
	Labels map[string]string `json:"labels,omitempty"`
	Writes []Write           `json:"writes,omitempty"`
}
