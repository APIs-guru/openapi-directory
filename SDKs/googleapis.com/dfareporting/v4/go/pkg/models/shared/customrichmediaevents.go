package shared

// CustomRichMediaEvents
// Represents a Custom Rich Media Events group.
type CustomRichMediaEvents struct {
	FilteredEventIds []DimensionValue `json:"filteredEventIds,omitempty"`
	Kind             *string          `json:"kind,omitempty"`
}
