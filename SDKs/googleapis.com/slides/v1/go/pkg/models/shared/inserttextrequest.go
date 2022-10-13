package shared

type InsertTextRequest struct {
	CellLocation   *TableCellLocation `json:"cellLocation"`
	InsertionIndex *int32             `json:"insertionIndex"`
	ObjectID       *string            `json:"objectId"`
	Text           *string            `json:"text"`
}
