package shared

// TableRowStyleSuggestionState
// A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
type TableRowStyleSuggestionState struct {
	MinRowHeightSuggested *bool `json:"minRowHeightSuggested,omitempty"`
}
