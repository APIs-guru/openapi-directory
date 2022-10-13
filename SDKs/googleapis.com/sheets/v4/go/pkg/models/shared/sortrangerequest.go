package shared

type SortRangeRequest struct {
	Range     *GridRange `json:"range"`
	SortSpecs []SortSpec `json:"sortSpecs"`
}
