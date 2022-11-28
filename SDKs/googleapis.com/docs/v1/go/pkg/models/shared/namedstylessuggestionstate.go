package shared

// NamedStylesSuggestionState
// The suggestion state of a NamedStyles message.
type NamedStylesSuggestionState struct {
	StylesSuggestionStates []NamedStyleSuggestionState `json:"stylesSuggestionStates,omitempty"`
}
