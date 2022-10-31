package shared

type FilterSpec struct {
	ColumnIndex               *int32                     `json:"columnIndex,omitempty"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
	FilterCriteria            *FilterCriteria            `json:"filterCriteria,omitempty"`
}
