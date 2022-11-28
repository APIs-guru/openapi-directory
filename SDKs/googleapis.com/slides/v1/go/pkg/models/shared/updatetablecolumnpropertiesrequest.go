package shared

// UpdateTableColumnPropertiesRequest
// Updates the properties of a Table column.
type UpdateTableColumnPropertiesRequest struct {
	ColumnIndices         []int32                `json:"columnIndices,omitempty"`
	Fields                *string                `json:"fields,omitempty"`
	ObjectID              *string                `json:"objectId,omitempty"`
	TableColumnProperties *TableColumnProperties `json:"tableColumnProperties,omitempty"`
}
