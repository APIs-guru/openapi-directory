package shared



type BigQueryDataSourceSpec struct {
    ProjectID *string `json:"projectId,omitempty"`
    QuerySpec *BigQueryQuerySpec `json:"querySpec,omitempty"`
    TableSpec *BigQueryTableSpec `json:"tableSpec,omitempty"`
    
}

