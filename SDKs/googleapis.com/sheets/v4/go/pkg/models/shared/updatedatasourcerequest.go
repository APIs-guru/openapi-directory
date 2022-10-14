package shared

type UpdateDataSourceRequest struct {
	DataSource *DataSource `json:"dataSource,omitempty"`
	Fields     *string     `json:"fields,omitempty"`
}
