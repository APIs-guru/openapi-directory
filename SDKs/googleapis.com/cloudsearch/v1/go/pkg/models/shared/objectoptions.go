package shared

// ObjectOptions
// The options for an object.
type ObjectOptions struct {
	DisplayOptions               *ObjectDisplayOptions `json:"displayOptions,omitempty"`
	FreshnessOptions             *FreshnessOptions     `json:"freshnessOptions,omitempty"`
	SuggestionFilteringOperators []string              `json:"suggestionFilteringOperators,omitempty"`
}
