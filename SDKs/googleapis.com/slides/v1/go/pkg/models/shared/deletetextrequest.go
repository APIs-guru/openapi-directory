package shared

// DeleteTextRequest
// Deletes text from a shape or a table cell.
type DeleteTextRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
	ObjectID     *string            `json:"objectId,omitempty"`
	TextRange    *Range             `json:"textRange,omitempty"`
}
