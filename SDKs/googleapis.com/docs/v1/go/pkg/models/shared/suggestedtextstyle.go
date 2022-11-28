package shared

// SuggestedTextStyle
// A suggested change to a TextStyle.
type SuggestedTextStyle struct {
	TextStyle                *TextStyle                `json:"textStyle,omitempty"`
	TextStyleSuggestionState *TextStyleSuggestionState `json:"textStyleSuggestionState,omitempty"`
}
