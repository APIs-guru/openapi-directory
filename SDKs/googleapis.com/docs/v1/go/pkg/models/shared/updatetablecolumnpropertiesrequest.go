package shared

type UpdateTableColumnPropertiesRequest struct {
	ColumnIndices         []int32                `json:"columnIndices,omitempty"`
	Fields                *string                `json:"fields,omitempty"`
	TableColumnProperties *TableColumnProperties `json:"tableColumnProperties,omitempty"`
	TableStartLocation    *Location              `json:"tableStartLocation,omitempty"`
}
