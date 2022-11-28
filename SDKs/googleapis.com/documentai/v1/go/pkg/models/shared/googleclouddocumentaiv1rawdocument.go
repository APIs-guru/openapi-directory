package shared

// GoogleCloudDocumentaiV1RawDocument
// Payload message of raw document content (bytes).
type GoogleCloudDocumentaiV1RawDocument struct {
	Content  *string `json:"content,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
