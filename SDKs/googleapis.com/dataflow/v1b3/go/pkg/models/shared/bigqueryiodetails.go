package shared



type BigQueryIoDetails struct {
    Dataset *string `json:"dataset,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Query *string `json:"query,omitempty"`
    Table *string `json:"table,omitempty"`
    
}

