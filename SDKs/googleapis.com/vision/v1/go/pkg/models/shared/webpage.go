package shared

type WebPage struct {
	FullMatchingImages    []WebImage `json:"fullMatchingImages"`
	PageTitle             *string    `json:"pageTitle"`
	PartialMatchingImages []WebImage `json:"partialMatchingImages"`
	Score                 *float32   `json:"score"`
	URL                   *string    `json:"url"`
}
