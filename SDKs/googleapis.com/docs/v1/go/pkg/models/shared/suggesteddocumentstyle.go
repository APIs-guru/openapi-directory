package shared

type SuggestedDocumentStyle struct {
	DocumentStyle                *DocumentStyle                `json:"documentStyle,omitempty"`
	DocumentStyleSuggestionState *DocumentStyleSuggestionState `json:"documentStyleSuggestionState,omitempty"`
}
