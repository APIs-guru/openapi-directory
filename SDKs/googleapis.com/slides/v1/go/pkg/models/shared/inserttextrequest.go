package shared



type InsertTextRequest struct {
    CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
    InsertionIndex *int32 `json:"insertionIndex,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

