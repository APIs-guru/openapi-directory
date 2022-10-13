package shared

type PivotFilterSpec struct {
	ColumnOffsetIndex         *int32                     `json:"columnOffsetIndex"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference"`
	FilterCriteria            *PivotFilterCriteria       `json:"filterCriteria"`
}
