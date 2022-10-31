package shared



type UpdateTableRowPropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    RowIndices []int32 `json:"rowIndices,omitempty"`
    TableRowProperties *TableRowProperties `json:"tableRowProperties,omitempty"`
    
}

