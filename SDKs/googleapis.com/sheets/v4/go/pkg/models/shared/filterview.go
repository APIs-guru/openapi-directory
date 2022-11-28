package shared

// FilterView
// A filter view.
type FilterView struct {
	Criteria     map[string]FilterCriteria `json:"criteria,omitempty"`
	FilterSpecs  []FilterSpec              `json:"filterSpecs,omitempty"`
	FilterViewID *int32                    `json:"filterViewId,omitempty"`
	NamedRangeID *string                   `json:"namedRangeId,omitempty"`
	Range        *GridRange                `json:"range,omitempty"`
	SortSpecs    []SortSpec                `json:"sortSpecs,omitempty"`
	Title        *string                   `json:"title,omitempty"`
}
