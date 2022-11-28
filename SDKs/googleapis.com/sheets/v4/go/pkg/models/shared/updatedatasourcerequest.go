package shared

// UpdateDataSourceRequest
// Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
type UpdateDataSourceRequest struct {
	DataSource *DataSource `json:"dataSource,omitempty"`
	Fields     *string     `json:"fields,omitempty"`
}
