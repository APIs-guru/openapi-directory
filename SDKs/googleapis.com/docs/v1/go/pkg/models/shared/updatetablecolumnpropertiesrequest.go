package shared

type UpdateTableColumnPropertiesRequest struct {
	ColumnIndices         []int32                `json:"columnIndices"`
	Fields                *string                `json:"fields"`
	TableColumnProperties *TableColumnProperties `json:"tableColumnProperties"`
	TableStartLocation    *Location              `json:"tableStartLocation"`
}
