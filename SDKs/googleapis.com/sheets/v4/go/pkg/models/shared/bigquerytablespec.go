package shared

// BigQueryTableSpec
// Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
type BigQueryTableSpec struct {
	DatasetID      *string `json:"datasetId,omitempty"`
	TableID        *string `json:"tableId,omitempty"`
	TableProjectID *string `json:"tableProjectId,omitempty"`
}
