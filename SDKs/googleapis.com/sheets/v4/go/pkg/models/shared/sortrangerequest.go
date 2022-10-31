package shared

type SortRangeRequest struct {
	Range     *GridRange `json:"range,omitempty"`
	SortSpecs []SortSpec `json:"sortSpecs,omitempty"`
}
