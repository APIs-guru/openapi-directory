package shared

// PivotFilterSpec
// The pivot table filter criteria associated with a specific source column offset.
type PivotFilterSpec struct {
	ColumnOffsetIndex         *int32                     `json:"columnOffsetIndex,omitempty"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
	FilterCriteria            *PivotFilterCriteria       `json:"filterCriteria,omitempty"`
}
