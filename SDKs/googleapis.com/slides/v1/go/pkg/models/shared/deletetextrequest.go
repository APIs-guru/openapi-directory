package shared

type DeleteTextRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation"`
	ObjectID     *string            `json:"objectId"`
	TextRange    *Range             `json:"textRange"`
}
