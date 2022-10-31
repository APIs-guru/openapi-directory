package shared



type DeleteParagraphBulletsRequest struct {
    CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    TextRange *Range `json:"textRange,omitempty"`
    
}

