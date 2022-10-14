package shared

type UpdateTableCellStyleRequest struct {
	Fields             *string         `json:"fields,omitempty"`
	TableCellStyle     *TableCellStyle `json:"tableCellStyle,omitempty"`
	TableRange         *TableRange     `json:"tableRange,omitempty"`
	TableStartLocation *Location       `json:"tableStartLocation,omitempty"`
}
