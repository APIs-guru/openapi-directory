package shared

type OutputConfig struct {
	BigqueryDestination *BigQueryDestination `json:"bigqueryDestination"`
	GcsDestination      *GcsDestination      `json:"gcsDestination"`
}
