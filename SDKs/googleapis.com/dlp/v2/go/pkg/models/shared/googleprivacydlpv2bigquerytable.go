package shared

// GooglePrivacyDlpV2BigQueryTable
// Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
type GooglePrivacyDlpV2BigQueryTable struct {
	DatasetID *string `json:"datasetId,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	TableID   *string `json:"tableId,omitempty"`
}
