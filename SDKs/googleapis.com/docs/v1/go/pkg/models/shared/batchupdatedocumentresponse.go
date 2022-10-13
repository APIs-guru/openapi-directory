package shared

type BatchUpdateDocumentResponse struct {
	DocumentID   *string       `json:"documentId"`
	Replies      []Response    `json:"replies"`
	WriteControl *WriteControl `json:"writeControl"`
}
