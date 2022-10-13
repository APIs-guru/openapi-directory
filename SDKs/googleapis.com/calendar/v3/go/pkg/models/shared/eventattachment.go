package shared

type EventAttachment struct {
	FileID   *string `json:"fileId"`
	FileURL  *string `json:"fileUrl"`
	IconLink *string `json:"iconLink"`
	MimeType *string `json:"mimeType"`
	Title    *string `json:"title"`
}
