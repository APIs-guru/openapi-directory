package shared

type UpdateTableRowPropertiesRequest struct {
	Fields             *string             `json:"fields"`
	ObjectID           *string             `json:"objectId"`
	RowIndices         []int32             `json:"rowIndices"`
	TableRowProperties *TableRowProperties `json:"tableRowProperties"`
}
