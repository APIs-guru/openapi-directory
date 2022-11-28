package shared

// BatchUpdateDocumentRequest
// Request message for BatchUpdateDocument.
type BatchUpdateDocumentRequest struct {
	Requests     []Request     `json:"requests,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
