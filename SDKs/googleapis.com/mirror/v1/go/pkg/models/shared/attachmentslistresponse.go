package shared

// AttachmentsListResponse
// A list of Attachments. This is the response from the server to GET requests on the attachments collection.
type AttachmentsListResponse struct {
	Items []Attachment
	Kind  *string
}
