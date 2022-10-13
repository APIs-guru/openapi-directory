package shared

type SuggestedParagraphStyle struct {
	ParagraphStyle                *ParagraphStyle                `json:"paragraphStyle"`
	ParagraphStyleSuggestionState *ParagraphStyleSuggestionState `json:"paragraphStyleSuggestionState"`
}
