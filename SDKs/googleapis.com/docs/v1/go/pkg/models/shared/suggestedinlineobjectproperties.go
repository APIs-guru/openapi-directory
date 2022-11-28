package shared

// SuggestedInlineObjectProperties
// A suggested change to InlineObjectProperties.
type SuggestedInlineObjectProperties struct {
	InlineObjectProperties                *InlineObjectProperties                `json:"inlineObjectProperties,omitempty"`
	InlineObjectPropertiesSuggestionState *InlineObjectPropertiesSuggestionState `json:"inlineObjectPropertiesSuggestionState,omitempty"`
}
