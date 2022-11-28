package shared

// Selection
// Wrapper for Selection Field value as combined value/display_name pair for selected choice.
type Selection struct {
	DisplayName *string `json:"displayName,omitempty"`
	Value       *string `json:"value,omitempty"`
}
