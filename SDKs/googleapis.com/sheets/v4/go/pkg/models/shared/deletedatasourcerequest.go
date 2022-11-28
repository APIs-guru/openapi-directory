package shared

// DeleteDataSourceRequest
// Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
type DeleteDataSourceRequest struct {
	DataSourceID *string `json:"dataSourceId,omitempty"`
}
