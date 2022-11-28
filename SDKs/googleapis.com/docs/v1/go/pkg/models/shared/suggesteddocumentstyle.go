package shared

// SuggestedDocumentStyle
// A suggested change to the DocumentStyle.
type SuggestedDocumentStyle struct {
	DocumentStyle                *DocumentStyle                `json:"documentStyle,omitempty"`
	DocumentStyleSuggestionState *DocumentStyleSuggestionState `json:"documentStyleSuggestionState,omitempty"`
}
