package shared

// AddDataSourceRequest
// Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.
type AddDataSourceRequest struct {
	DataSource *DataSource `json:"dataSource,omitempty"`
}
