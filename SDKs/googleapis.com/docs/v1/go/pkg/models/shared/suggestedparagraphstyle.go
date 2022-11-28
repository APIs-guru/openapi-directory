package shared

// SuggestedParagraphStyle
// A suggested change to a ParagraphStyle.
type SuggestedParagraphStyle struct {
	ParagraphStyle                *ParagraphStyle                `json:"paragraphStyle,omitempty"`
	ParagraphStyleSuggestionState *ParagraphStyleSuggestionState `json:"paragraphStyleSuggestionState,omitempty"`
}
