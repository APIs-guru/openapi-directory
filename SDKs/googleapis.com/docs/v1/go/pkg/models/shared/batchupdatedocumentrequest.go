package shared

type BatchUpdateDocumentRequest struct {
	Requests     []Request     `json:"requests"`
	WriteControl *WriteControl `json:"writeControl"`
}
