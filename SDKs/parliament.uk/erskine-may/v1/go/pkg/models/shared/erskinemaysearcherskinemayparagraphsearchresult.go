package shared

type ErskineMaySearchErskineMayParagraphSearchResult struct {
	SearchResults   []ErskineMayParagraphSearchResult `json:"searchResults"`
	SearchTerm      *string                           `json:"searchTerm"`
	SearchTerms     []string                          `json:"searchTerms"`
	Skip            *int32                            `json:"skip"`
	SuggestedSearch *string                           `json:"suggestedSearch"`
	Take            *int32                            `json:"take"`
	TotalResults    *int32                            `json:"totalResults"`
}
