package shared

type BatchUpdateDocumentResponse struct {
	DocumentID   *string       `json:"documentId,omitempty"`
	Replies      []Response    `json:"replies,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
