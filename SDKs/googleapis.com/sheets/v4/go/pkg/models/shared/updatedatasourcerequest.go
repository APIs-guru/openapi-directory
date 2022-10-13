package shared

type UpdateDataSourceRequest struct {
	DataSource *DataSource `json:"dataSource"`
	Fields     *string     `json:"fields"`
}
