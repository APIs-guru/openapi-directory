package shared

type CustomRichMediaEvents struct {
	FilteredEventIds []DimensionValue `json:"filteredEventIds"`
	Kind             *string          `json:"kind"`
}
