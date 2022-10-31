package shared

type ListAttachmentsResponse struct {
	Attachments   []Attachment `json:"attachments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
