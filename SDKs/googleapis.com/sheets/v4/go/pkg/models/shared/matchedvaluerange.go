package shared

// MatchedValueRange
// A value range that was matched by one or more data filers.
type MatchedValueRange struct {
	DataFilters []DataFilter `json:"dataFilters,omitempty"`
	ValueRange  *ValueRange  `json:"valueRange,omitempty"`
}
