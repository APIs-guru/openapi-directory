package shared



type BigQueryTableSpec struct {
    DatasetID *string `json:"datasetId,omitempty"`
    TableID *string `json:"tableId,omitempty"`
    TableProjectID *string `json:"tableProjectId,omitempty"`
    
}

