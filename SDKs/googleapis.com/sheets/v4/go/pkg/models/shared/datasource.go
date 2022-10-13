package shared

type DataSource struct {
	CalculatedColumns []DataSourceColumn `json:"calculatedColumns"`
	DataSourceID      *string            `json:"dataSourceId"`
	SheetID           *int32             `json:"sheetId"`
	Spec              *DataSourceSpec    `json:"spec"`
}
