package shared

// Snippet
// Snippet of the search result, which summarizes the content of the resulting page.
type Snippet struct {
	MatchRanges []MatchRange `json:"matchRanges,omitempty"`
	Snippet     *string      `json:"snippet,omitempty"`
}
