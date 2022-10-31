package shared



type UpdateTableColumnPropertiesRequest struct {
    ColumnIndices []int32 `json:"columnIndices,omitempty"`
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    TableColumnProperties *TableColumnProperties `json:"tableColumnProperties,omitempty"`
    
}

