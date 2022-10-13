package shared

type ObjectOptions struct {
	DisplayOptions               *ObjectDisplayOptions `json:"displayOptions"`
	FreshnessOptions             *FreshnessOptions     `json:"freshnessOptions"`
	SuggestionFilteringOperators []string              `json:"suggestionFilteringOperators"`
}
