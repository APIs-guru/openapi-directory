package shared

// GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics
// Evaluations metrics, at a specific confidence level.
type GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics struct {
	ConfidenceLevel *float32                                       `json:"confidenceLevel,omitempty"`
	Metrics         *GoogleCloudDocumentaiV1beta3EvaluationMetrics `json:"metrics,omitempty"`
}
