package shared

type DeleteTextRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
	ObjectID     *string            `json:"objectId,omitempty"`
	TextRange    *Range             `json:"textRange,omitempty"`
}
