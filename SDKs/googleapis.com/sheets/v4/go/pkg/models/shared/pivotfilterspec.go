package shared



type PivotFilterSpec struct {
    ColumnOffsetIndex *int32 `json:"columnOffsetIndex,omitempty"`
    DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
    FilterCriteria *PivotFilterCriteria `json:"filterCriteria,omitempty"`
    
}

