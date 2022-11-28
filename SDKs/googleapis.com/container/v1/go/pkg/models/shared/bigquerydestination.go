package shared

// BigQueryDestination
// Parameters for using BigQuery as the destination of resource usage export.
type BigQueryDestination struct {
	DatasetID *string `json:"datasetId,omitempty"`
}
