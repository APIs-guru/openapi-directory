package shared

type UpdateTableCellPropertiesRequest struct {
	Fields              *string              `json:"fields"`
	ObjectID            *string              `json:"objectId"`
	TableCellProperties *TableCellProperties `json:"tableCellProperties"`
	TableRange          *TableRange          `json:"tableRange"`
}
