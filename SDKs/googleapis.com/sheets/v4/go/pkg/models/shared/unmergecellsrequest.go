package shared

// UnmergeCellsRequest
// Unmerges cells in the given range.
type UnmergeCellsRequest struct {
	Range *GridRange `json:"range,omitempty"`
}
