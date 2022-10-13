package shared

type WebDetection struct {
	BestGuessLabels         []WebLabel  `json:"bestGuessLabels"`
	FullMatchingImages      []WebImage  `json:"fullMatchingImages"`
	PagesWithMatchingImages []WebPage   `json:"pagesWithMatchingImages"`
	PartialMatchingImages   []WebImage  `json:"partialMatchingImages"`
	VisuallySimilarImages   []WebImage  `json:"visuallySimilarImages"`
	WebEntities             []WebEntity `json:"webEntities"`
}
