package shared

type PivotTableValueLayoutEnum string

const (
	PivotTableValueLayoutEnumHorizontal PivotTableValueLayoutEnum = "HORIZONTAL"
	PivotTableValueLayoutEnumVertical   PivotTableValueLayoutEnum = "VERTICAL"
)

type PivotTable struct {
	Columns             []PivotGroup                   `json:"columns"`
	Criteria            map[string]PivotFilterCriteria `json:"criteria"`
	DataExecutionStatus *DataExecutionStatus           `json:"dataExecutionStatus"`
	DataSourceID        *string                        `json:"dataSourceId"`
	FilterSpecs         []PivotFilterSpec              `json:"filterSpecs"`
	Rows                []PivotGroup                   `json:"rows"`
	Source              *GridRange                     `json:"source"`
	ValueLayout         *PivotTableValueLayoutEnum     `json:"valueLayout"`
	Values              []PivotValue                   `json:"values"`
}
