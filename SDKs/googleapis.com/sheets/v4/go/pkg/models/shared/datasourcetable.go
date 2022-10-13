package shared

type DataSourceTableColumnSelectionTypeEnum string

const (
	DataSourceTableColumnSelectionTypeEnumDataSourceTableColumnSelectionTypeUnspecified DataSourceTableColumnSelectionTypeEnum = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
	DataSourceTableColumnSelectionTypeEnumSelected                                      DataSourceTableColumnSelectionTypeEnum = "SELECTED"
	DataSourceTableColumnSelectionTypeEnumSyncAll                                       DataSourceTableColumnSelectionTypeEnum = "SYNC_ALL"
)

type DataSourceTable struct {
	ColumnSelectionType *DataSourceTableColumnSelectionTypeEnum `json:"columnSelectionType"`
	Columns             []DataSourceColumnReference             `json:"columns"`
	DataExecutionStatus *DataExecutionStatus                    `json:"dataExecutionStatus"`
	DataSourceID        *string                                 `json:"dataSourceId"`
	FilterSpecs         []FilterSpec                            `json:"filterSpecs"`
	RowLimit            *int32                                  `json:"rowLimit"`
	SortSpecs           []SortSpec                              `json:"sortSpecs"`
}
