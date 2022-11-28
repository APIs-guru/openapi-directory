package shared

// BatchUpdatePresentationResponse
// Response message from a batch update.
type BatchUpdatePresentationResponse struct {
	PresentationID *string       `json:"presentationId,omitempty"`
	Replies        []Response    `json:"replies,omitempty"`
	WriteControl   *WriteControl `json:"writeControl,omitempty"`
}
