package shared



type UnmergeTableCellsRequest struct {
    ObjectID *string `json:"objectId,omitempty"`
    TableRange *TableRange `json:"tableRange,omitempty"`
    
}

