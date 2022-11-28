package shared

// GoogleCloudMlV1PredictionOutput
// Represents results of a prediction job.
type GoogleCloudMlV1PredictionOutput struct {
	ErrorCount      *string  `json:"errorCount,omitempty"`
	NodeHours       *float64 `json:"nodeHours,omitempty"`
	OutputPath      *string  `json:"outputPath,omitempty"`
	PredictionCount *string  `json:"predictionCount,omitempty"`
}
