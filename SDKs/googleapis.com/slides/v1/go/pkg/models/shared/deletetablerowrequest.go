package shared



type DeleteTableRowRequest struct {
    CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
    TableObjectID *string `json:"tableObjectId,omitempty"`
    
}

