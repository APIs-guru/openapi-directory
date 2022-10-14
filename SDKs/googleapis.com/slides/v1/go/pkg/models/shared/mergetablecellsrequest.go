package shared

type MergeTableCellsRequest struct {
	ObjectID   *string     `json:"objectId,omitempty"`
	TableRange *TableRange `json:"tableRange,omitempty"`
}
