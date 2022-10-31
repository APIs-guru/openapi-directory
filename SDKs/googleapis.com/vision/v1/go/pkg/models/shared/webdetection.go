package shared



type WebDetection struct {
    BestGuessLabels []WebLabel `json:"bestGuessLabels,omitempty"`
    FullMatchingImages []WebImage `json:"fullMatchingImages,omitempty"`
    PagesWithMatchingImages []WebPage `json:"pagesWithMatchingImages,omitempty"`
    PartialMatchingImages []WebImage `json:"partialMatchingImages,omitempty"`
    VisuallySimilarImages []WebImage `json:"visuallySimilarImages,omitempty"`
    WebEntities []WebEntity `json:"webEntities,omitempty"`
    
}

