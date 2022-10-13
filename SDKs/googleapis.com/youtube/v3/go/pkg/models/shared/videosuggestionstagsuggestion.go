package shared

type VideoSuggestionsTagSuggestion struct {
	CategoryRestricts []string `json:"categoryRestricts"`
	Tag               *string  `json:"tag"`
}
