package shared



type DataSourceSpec struct {
    BigQuery *BigQueryDataSourceSpec `json:"bigQuery,omitempty"`
    Parameters []DataSourceParameter `json:"parameters,omitempty"`
    
}

