package shared

type FilterSpec struct {
	ColumnIndex               *int32                     `json:"columnIndex"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference"`
	FilterCriteria            *FilterCriteria            `json:"filterCriteria"`
}
