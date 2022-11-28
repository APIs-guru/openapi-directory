package shared

// MergeTableCellsRequest
// Merges cells in a Table.
type MergeTableCellsRequest struct {
	ObjectID   *string     `json:"objectId,omitempty"`
	TableRange *TableRange `json:"tableRange,omitempty"`
}
