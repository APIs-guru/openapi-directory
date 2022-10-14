package shared

type UpdateTextStyleRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
	Fields       *string            `json:"fields,omitempty"`
	ObjectID     *string            `json:"objectId,omitempty"`
	Style        *TextStyle         `json:"style,omitempty"`
	TextRange    *Range             `json:"textRange,omitempty"`
}
