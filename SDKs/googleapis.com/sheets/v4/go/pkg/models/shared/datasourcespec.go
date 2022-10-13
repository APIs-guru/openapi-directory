package shared

type DataSourceSpec struct {
	BigQuery   *BigQueryDataSourceSpec `json:"bigQuery"`
	Parameters []DataSourceParameter   `json:"parameters"`
}
