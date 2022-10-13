package shared

type CreateShortDynamicLinkResponse struct {
	PreviewLink *string              `json:"previewLink"`
	ShortLink   *string              `json:"shortLink"`
	Warning     []DynamicLinkWarning `json:"warning"`
}
