package shared

type Attachment struct {
	ContentType         *string `json:"contentType,omitempty"`
	ContentURL          *string `json:"contentUrl,omitempty"`
	ID                  *string `json:"id,omitempty"`
	IsProcessingContent *bool   `json:"isProcessingContent,omitempty"`
}
