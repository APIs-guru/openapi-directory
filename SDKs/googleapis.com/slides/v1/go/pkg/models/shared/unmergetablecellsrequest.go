package shared

// UnmergeTableCellsRequest
// Unmerges cells in a Table.
type UnmergeTableCellsRequest struct {
	ObjectID   *string     `json:"objectId,omitempty"`
	TableRange *TableRange `json:"tableRange,omitempty"`
}
