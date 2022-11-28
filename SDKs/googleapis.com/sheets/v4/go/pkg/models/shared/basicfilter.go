package shared

// BasicFilter
// The default filter associated with a sheet.
type BasicFilter struct {
	Criteria    map[string]FilterCriteria `json:"criteria,omitempty"`
	FilterSpecs []FilterSpec              `json:"filterSpecs,omitempty"`
	Range       *GridRange                `json:"range,omitempty"`
	SortSpecs   []SortSpec                `json:"sortSpecs,omitempty"`
}
