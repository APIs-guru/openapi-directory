package shared

// CreateShortDynamicLinkResponse
// Response to create a short Dynamic Link.
type CreateShortDynamicLinkResponse struct {
	PreviewLink *string              `json:"previewLink,omitempty"`
	ShortLink   *string              `json:"shortLink,omitempty"`
	Warning     []DynamicLinkWarning `json:"warning,omitempty"`
}
