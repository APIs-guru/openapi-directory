package shared

type ApplicationDocumentCreateRequest struct {
	DocumentType string  `json:"document_type"`
	Name         string  `json:"name"`
	Notes        *string `json:"notes,omitempty"`
}
