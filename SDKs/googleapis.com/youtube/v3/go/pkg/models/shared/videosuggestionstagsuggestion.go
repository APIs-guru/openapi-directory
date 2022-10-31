package shared

type VideoSuggestionsTagSuggestion struct {
	CategoryRestricts []string `json:"categoryRestricts,omitempty"`
	Tag               *string  `json:"tag,omitempty"`
}
