package shared

// GoogleCloudDocumentaiV1beta3EvaluationMetrics
// Evaluation metrics, either in aggregate or about a specific entity.
type GoogleCloudDocumentaiV1beta3EvaluationMetrics struct {
	F1Score                     *float32 `json:"f1Score,omitempty"`
	FalseNegativesCount         *int32   `json:"falseNegativesCount,omitempty"`
	FalsePositivesCount         *int32   `json:"falsePositivesCount,omitempty"`
	GroundTruthDocumentCount    *int32   `json:"groundTruthDocumentCount,omitempty"`
	GroundTruthOccurrencesCount *int32   `json:"groundTruthOccurrencesCount,omitempty"`
	Precision                   *float32 `json:"precision,omitempty"`
	PredictedDocumentCount      *int32   `json:"predictedDocumentCount,omitempty"`
	PredictedOccurrencesCount   *int32   `json:"predictedOccurrencesCount,omitempty"`
	Recall                      *float32 `json:"recall,omitempty"`
	TotalDocumentsCount         *int32   `json:"totalDocumentsCount,omitempty"`
	TruePositivesCount          *int32   `json:"truePositivesCount,omitempty"`
}
