package shared

type UnmergeTableCellsRequest struct {
	ObjectID   *string     `json:"objectId"`
	TableRange *TableRange `json:"tableRange"`
}
