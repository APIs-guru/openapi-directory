package shared

type UpdateTableCellStyleRequest struct {
	Fields             *string         `json:"fields"`
	TableCellStyle     *TableCellStyle `json:"tableCellStyle"`
	TableRange         *TableRange     `json:"tableRange"`
	TableStartLocation *Location       `json:"tableStartLocation"`
}
