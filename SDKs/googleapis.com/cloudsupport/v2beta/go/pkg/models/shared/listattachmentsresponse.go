package shared

type ListAttachmentsResponse struct {
	Attachments   []Attachment `json:"attachments"`
	NextPageToken *string      `json:"nextPageToken"`
}
