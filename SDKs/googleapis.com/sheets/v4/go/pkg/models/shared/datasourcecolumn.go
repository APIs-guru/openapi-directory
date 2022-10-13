package shared

type DataSourceColumn struct {
	Formula   *string                    `json:"formula"`
	Reference *DataSourceColumnReference `json:"reference"`
}
