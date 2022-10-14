package shared

type SuggestedParagraphStyle struct {
	ParagraphStyle                *ParagraphStyle                `json:"paragraphStyle,omitempty"`
	ParagraphStyleSuggestionState *ParagraphStyleSuggestionState `json:"paragraphStyleSuggestionState,omitempty"`
}
