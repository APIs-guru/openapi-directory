package shared

// BatchCreateNotesRequest
// Request to create notes in batch.
type BatchCreateNotesRequest struct {
	Notes map[string]Note `json:"notes,omitempty"`
}
