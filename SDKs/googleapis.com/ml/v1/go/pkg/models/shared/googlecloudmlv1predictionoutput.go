package shared

type GoogleCloudMlV1PredictionOutput struct {
	ErrorCount      *string  `json:"errorCount"`
	NodeHours       *float64 `json:"nodeHours"`
	OutputPath      *string  `json:"outputPath"`
	PredictionCount *string  `json:"predictionCount"`
}
