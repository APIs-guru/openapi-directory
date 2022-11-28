package shared

// DataSourceSpec
// This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
type DataSourceSpec struct {
	BigQuery   *BigQueryDataSourceSpec `json:"bigQuery,omitempty"`
	Parameters []DataSourceParameter   `json:"parameters,omitempty"`
}
