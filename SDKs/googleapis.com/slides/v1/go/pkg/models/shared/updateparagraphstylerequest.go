package shared



type UpdateParagraphStyleRequest struct {
    CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    Style *ParagraphStyle `json:"style,omitempty"`
    TextRange *Range `json:"textRange,omitempty"`
    
}

