package shared

// BatchCreateNotesResponse
// Response for creating notes in batch.
type BatchCreateNotesResponse struct {
	Notes []Note `json:"notes,omitempty"`
}
