package shared

// SuggestedPositionedObjectProperties
// A suggested change to PositionedObjectProperties.
type SuggestedPositionedObjectProperties struct {
	PositionedObjectProperties                *PositionedObjectProperties                `json:"positionedObjectProperties,omitempty"`
	PositionedObjectPropertiesSuggestionState *PositionedObjectPropertiesSuggestionState `json:"positionedObjectPropertiesSuggestionState,omitempty"`
}
