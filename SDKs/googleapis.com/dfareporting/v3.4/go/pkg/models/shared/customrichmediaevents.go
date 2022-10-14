package shared

type CustomRichMediaEvents struct {
	FilteredEventIds []DimensionValue `json:"filteredEventIds,omitempty"`
	Kind             *string          `json:"kind,omitempty"`
}
