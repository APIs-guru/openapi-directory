package shared



type OutputConfig struct {
    BigqueryDestination *BigQueryDestination `json:"bigqueryDestination,omitempty"`
    GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
    
}

