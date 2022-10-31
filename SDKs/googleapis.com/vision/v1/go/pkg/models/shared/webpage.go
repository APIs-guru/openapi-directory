package shared

type WebPage struct {
	FullMatchingImages    []WebImage `json:"fullMatchingImages,omitempty"`
	PageTitle             *string    `json:"pageTitle,omitempty"`
	PartialMatchingImages []WebImage `json:"partialMatchingImages,omitempty"`
	Score                 *float32   `json:"score,omitempty"`
	URL                   *string    `json:"url,omitempty"`
}
