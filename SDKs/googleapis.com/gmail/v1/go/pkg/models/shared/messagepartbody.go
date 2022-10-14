package shared

type MessagePartBody struct {
	AttachmentID *string `json:"attachmentId,omitempty"`
	Data         *string `json:"data,omitempty"`
	Size         *int32  `json:"size,omitempty"`
}
