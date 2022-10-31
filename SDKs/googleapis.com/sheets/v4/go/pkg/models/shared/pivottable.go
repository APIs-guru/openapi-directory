package shared




type PivotTableValueLayoutEnum string

const (
    PivotTableValueLayoutEnumHorizontal PivotTableValueLayoutEnum = "HORIZONTAL"
PivotTableValueLayoutEnumVertical PivotTableValueLayoutEnum = "VERTICAL"
)


type PivotTable struct {
    Columns []PivotGroup `json:"columns,omitempty"`
    Criteria map[string]PivotFilterCriteria `json:"criteria,omitempty"`
    DataExecutionStatus *DataExecutionStatus `json:"dataExecutionStatus,omitempty"`
    DataSourceID *string `json:"dataSourceId,omitempty"`
    FilterSpecs []PivotFilterSpec `json:"filterSpecs,omitempty"`
    Rows []PivotGroup `json:"rows,omitempty"`
    Source *GridRange `json:"source,omitempty"`
    ValueLayout *PivotTableValueLayoutEnum `json:"valueLayout,omitempty"`
    Values []PivotValue `json:"values,omitempty"`
    
}

