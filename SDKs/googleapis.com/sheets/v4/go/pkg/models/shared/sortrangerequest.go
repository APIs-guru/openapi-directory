package shared

// SortRangeRequest
// Sorts data in rows based on a sort order per column.
type SortRangeRequest struct {
	Range     *GridRange `json:"range,omitempty"`
	SortSpecs []SortSpec `json:"sortSpecs,omitempty"`
}
