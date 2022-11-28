package shared

// GoogleCloudDatalabelingV1beta1BigQuerySource
// The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
type GoogleCloudDatalabelingV1beta1BigQuerySource struct {
	InputURI *string `json:"inputUri,omitempty"`
}
