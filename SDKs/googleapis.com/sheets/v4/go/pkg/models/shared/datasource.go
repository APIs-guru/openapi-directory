package shared

type DataSource struct {
	CalculatedColumns []DataSourceColumn `json:"calculatedColumns,omitempty"`
	DataSourceID      *string            `json:"dataSourceId,omitempty"`
	SheetID           *int32             `json:"sheetId,omitempty"`
	Spec              *DataSourceSpec    `json:"spec,omitempty"`
}
