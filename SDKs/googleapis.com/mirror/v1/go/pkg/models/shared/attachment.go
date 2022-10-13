package shared

type Attachment struct {
	ContentType         *string `json:"contentType"`
	ContentURL          *string `json:"contentUrl"`
	ID                  *string `json:"id"`
	IsProcessingContent *bool   `json:"isProcessingContent"`
}
