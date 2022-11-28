package shared

// RichLinkProperties
// Properties specific to a RichLink.
type RichLinkProperties struct {
	MimeType *string `json:"mimeType,omitempty"`
	Title    *string `json:"title,omitempty"`
	URI      *string `json:"uri,omitempty"`
}
