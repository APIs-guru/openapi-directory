package shared

// CreateAttachmentRequestInput
// The request message for the CreateAttachment endpoint.
type CreateAttachmentRequestInput struct {
	Attachment *AttachmentInput `json:"attachment,omitempty"`
}
