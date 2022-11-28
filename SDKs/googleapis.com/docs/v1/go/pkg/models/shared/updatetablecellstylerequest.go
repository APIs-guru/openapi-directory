package shared

// UpdateTableCellStyleRequest
// Updates the style of a range of table cells.
type UpdateTableCellStyleRequest struct {
	Fields             *string         `json:"fields,omitempty"`
	TableCellStyle     *TableCellStyle `json:"tableCellStyle,omitempty"`
	TableRange         *TableRange     `json:"tableRange,omitempty"`
	TableStartLocation *Location       `json:"tableStartLocation,omitempty"`
}
