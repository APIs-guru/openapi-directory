package shared

type MergeTableCellsRequest struct {
	ObjectID   *string     `json:"objectId"`
	TableRange *TableRange `json:"tableRange"`
}
