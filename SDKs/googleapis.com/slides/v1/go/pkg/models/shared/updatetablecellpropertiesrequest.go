package shared

// UpdateTableCellPropertiesRequest
// Update the properties of a TableCell.
type UpdateTableCellPropertiesRequest struct {
	Fields              *string              `json:"fields,omitempty"`
	ObjectID            *string              `json:"objectId,omitempty"`
	TableCellProperties *TableCellProperties `json:"tableCellProperties,omitempty"`
	TableRange          *TableRange          `json:"tableRange,omitempty"`
}
