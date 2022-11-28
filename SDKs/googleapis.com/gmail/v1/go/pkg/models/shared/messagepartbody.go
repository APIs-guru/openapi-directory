package shared

// MessagePartBody
// The body of a single MIME message part.
type MessagePartBody struct {
	AttachmentID *string `json:"attachmentId,omitempty"`
	Data         *string `json:"data,omitempty"`
	Size         *int32  `json:"size,omitempty"`
}
