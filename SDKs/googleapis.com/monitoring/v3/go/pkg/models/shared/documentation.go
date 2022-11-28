package shared

// Documentation
// A content string and a MIME type that describes the content string's format.
type Documentation struct {
	Content  *string `json:"content,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
