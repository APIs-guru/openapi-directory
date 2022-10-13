package shared

type BasicFilter struct {
	Criteria    map[string]FilterCriteria `json:"criteria"`
	FilterSpecs []FilterSpec              `json:"filterSpecs"`
	Range       *GridRange                `json:"range"`
	SortSpecs   []SortSpec                `json:"sortSpecs"`
}
