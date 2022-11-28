package shared

// UpdateParagraphStyleRequest
// Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
type UpdateParagraphStyleRequest struct {
	CellLocation *TableCellLocation `json:"cellLocation,omitempty"`
	Fields       *string            `json:"fields,omitempty"`
	ObjectID     *string            `json:"objectId,omitempty"`
	Style        *ParagraphStyle    `json:"style,omitempty"`
	TextRange    *Range             `json:"textRange,omitempty"`
}
