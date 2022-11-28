package shared

// GoogleCloudMlV1HyperparameterOutputHyperparameterMetric
// An observed value of a metric.
type GoogleCloudMlV1HyperparameterOutputHyperparameterMetric struct {
	ObjectiveValue *float64 `json:"objectiveValue,omitempty"`
	TrainingStep   *string  `json:"trainingStep,omitempty"`
}
