package shared

type SuggestedNamedStyles struct {
	NamedStyles                *NamedStyles                `json:"namedStyles,omitempty"`
	NamedStylesSuggestionState *NamedStylesSuggestionState `json:"namedStylesSuggestionState,omitempty"`
}
