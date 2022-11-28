package shared

// SuggestedNamedStyles
// A suggested change to the NamedStyles.
type SuggestedNamedStyles struct {
	NamedStyles                *NamedStyles                `json:"namedStyles,omitempty"`
	NamedStylesSuggestionState *NamedStylesSuggestionState `json:"namedStylesSuggestionState,omitempty"`
}
