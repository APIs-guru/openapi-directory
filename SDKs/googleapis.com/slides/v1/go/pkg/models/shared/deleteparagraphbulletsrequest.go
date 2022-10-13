package shared

type DeleteParagraphBulletsRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation"`
	ObjectID     *string            `json:"objectId"`
	TextRange    *Range             `json:"textRange"`
}
