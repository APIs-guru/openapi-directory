package shared

type ErskineMaySearchErskineMayParagraphSearchResult struct {
	SearchResults   []ErskineMayParagraphSearchResult `json:"searchResults,omitempty"`
	SearchTerm      *string                           `json:"searchTerm,omitempty"`
	SearchTerms     []string                          `json:"searchTerms,omitempty"`
	Skip            *int32                            `json:"skip,omitempty"`
	SuggestedSearch *string                           `json:"suggestedSearch,omitempty"`
	Take            *int32                            `json:"take,omitempty"`
	TotalResults    *int32                            `json:"totalResults,omitempty"`
}
