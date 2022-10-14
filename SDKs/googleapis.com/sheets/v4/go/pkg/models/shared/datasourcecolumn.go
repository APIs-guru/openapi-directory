package shared

type DataSourceColumn struct {
	Formula   *string                    `json:"formula,omitempty"`
	Reference *DataSourceColumnReference `json:"reference,omitempty"`
}
