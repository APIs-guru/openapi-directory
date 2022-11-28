package shared

// BatchWriteResponse
// The response from Firestore.BatchWrite.
type BatchWriteResponse struct {
	Status       []Status      `json:"status,omitempty"`
	WriteResults []WriteResult `json:"writeResults,omitempty"`
}
