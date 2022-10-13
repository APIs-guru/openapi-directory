package shared

type FilterView struct {
	Criteria     map[string]FilterCriteria `json:"criteria"`
	FilterSpecs  []FilterSpec              `json:"filterSpecs"`
	FilterViewID *int32                    `json:"filterViewId"`
	NamedRangeID *string                   `json:"namedRangeId"`
	Range        *GridRange                `json:"range"`
	SortSpecs    []SortSpec                `json:"sortSpecs"`
	Title        *string                   `json:"title"`
}
