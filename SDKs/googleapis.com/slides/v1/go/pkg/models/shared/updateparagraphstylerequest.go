package shared

type UpdateParagraphStyleRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation"`
	Fields       *string            `json:"fields"`
	ObjectID     *string            `json:"objectId"`
	Style        *ParagraphStyle    `json:"style"`
	TextRange    *Range             `json:"textRange"`
}
