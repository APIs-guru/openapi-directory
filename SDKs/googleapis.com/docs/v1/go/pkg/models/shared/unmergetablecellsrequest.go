package shared

// UnmergeTableCellsRequest
// Unmerges cells in a Table.
type UnmergeTableCellsRequest struct {
	TableRange *TableRange `json:"tableRange,omitempty"`
}
