package shared

type UpdateTextStyleRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation"`
	Fields       *string            `json:"fields"`
	ObjectID     *string            `json:"objectId"`
	Style        *TextStyle         `json:"style"`
	TextRange    *Range             `json:"textRange"`
}
