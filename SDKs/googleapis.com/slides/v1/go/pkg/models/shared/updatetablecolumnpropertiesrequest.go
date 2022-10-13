package shared

type UpdateTableColumnPropertiesRequest struct {
	ColumnIndices         []int32                `json:"columnIndices"`
	Fields                *string                `json:"fields"`
	ObjectID              *string                `json:"objectId"`
	TableColumnProperties *TableColumnProperties `json:"tableColumnProperties"`
}
