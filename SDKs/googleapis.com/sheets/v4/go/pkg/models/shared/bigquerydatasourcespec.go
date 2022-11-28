package shared

// BigQueryDataSourceSpec
// The specification of a BigQuery data source that's connected to a sheet.
type BigQueryDataSourceSpec struct {
	ProjectID *string            `json:"projectId,omitempty"`
	QuerySpec *BigQueryQuerySpec `json:"querySpec,omitempty"`
	TableSpec *BigQueryTableSpec `json:"tableSpec,omitempty"`
}
