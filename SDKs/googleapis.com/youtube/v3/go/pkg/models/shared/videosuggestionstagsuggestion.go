package shared

// VideoSuggestionsTagSuggestion
// A single tag suggestion with it's relevance information.
type VideoSuggestionsTagSuggestion struct {
	CategoryRestricts []string `json:"categoryRestricts,omitempty"`
	Tag               *string  `json:"tag,omitempty"`
}
