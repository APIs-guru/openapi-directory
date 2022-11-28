package shared

// ListAttachmentsResponse
// The response message for the ListAttachments endpoint.
type ListAttachmentsResponse struct {
	Attachments   []Attachment `json:"attachments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
