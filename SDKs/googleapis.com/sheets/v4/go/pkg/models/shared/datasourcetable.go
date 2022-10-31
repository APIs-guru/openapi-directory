package shared




type DataSourceTableColumnSelectionTypeEnum string

const (
    DataSourceTableColumnSelectionTypeEnumDataSourceTableColumnSelectionTypeUnspecified DataSourceTableColumnSelectionTypeEnum = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
DataSourceTableColumnSelectionTypeEnumSelected DataSourceTableColumnSelectionTypeEnum = "SELECTED"
DataSourceTableColumnSelectionTypeEnumSyncAll DataSourceTableColumnSelectionTypeEnum = "SYNC_ALL"
)


type DataSourceTable struct {
    ColumnSelectionType *DataSourceTableColumnSelectionTypeEnum `json:"columnSelectionType,omitempty"`
    Columns []DataSourceColumnReference `json:"columns,omitempty"`
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    DataSourceID *string `json:"dataSourceId,omitempty"`
    FilterSpecs []FilterSpec `json:"filterSpecs,omitempty"`
    RowLimit *int32 `json:"rowLimit,omitempty"`
    SortSpecs []SortSpec `json:"sortSpecs,omitempty"`
    
}

