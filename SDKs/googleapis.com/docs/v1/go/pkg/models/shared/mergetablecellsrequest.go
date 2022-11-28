package shared

// MergeTableCellsRequest
// Merges cells in a Table.
type MergeTableCellsRequest struct {
	TableRange *TableRange `json:"tableRange,omitempty"`
}
