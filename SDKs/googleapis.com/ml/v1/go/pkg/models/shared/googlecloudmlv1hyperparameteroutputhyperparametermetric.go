package shared

type GoogleCloudMlV1HyperparameterOutputHyperparameterMetric struct {
	ObjectiveValue *float64 `json:"objectiveValue,omitempty"`
	TrainingStep   *string  `json:"trainingStep,omitempty"`
}
