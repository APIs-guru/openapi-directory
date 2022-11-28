package shared

// Image
// Describe image data.
type Image struct {
	Data     *string `json:"data,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
