package shared

// ModifyAttachmentsRequest
// Request to modify the attachments of a student submission.
type ModifyAttachmentsRequest struct {
	AddAttachments []Attachment `json:"addAttachments,omitempty"`
}
