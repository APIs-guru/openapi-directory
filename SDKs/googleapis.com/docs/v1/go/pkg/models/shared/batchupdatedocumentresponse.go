package shared

// BatchUpdateDocumentResponse
// Response message from a BatchUpdateDocument request.
type BatchUpdateDocumentResponse struct {
	DocumentID   *string       `json:"documentId,omitempty"`
	Replies      []Response    `json:"replies,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
