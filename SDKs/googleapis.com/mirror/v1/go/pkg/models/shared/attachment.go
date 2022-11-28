package shared

// Attachment
// Represents media content, such as a photo, that can be attached to a timeline item.
type Attachment struct {
	ContentType         *string `json:"contentType,omitempty"`
	ContentURL          *string `json:"contentUrl,omitempty"`
	ID                  *string `json:"id,omitempty"`
	IsProcessingContent *bool   `json:"isProcessingContent,omitempty"`
}
