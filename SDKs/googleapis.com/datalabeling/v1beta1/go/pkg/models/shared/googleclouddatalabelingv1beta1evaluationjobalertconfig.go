package shared

// GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
// Provides details for how an evaluation job sends email alerts based on the results of a run.
type GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig struct {
	Email                             *string  `json:"email,omitempty"`
	MinAcceptableMeanAveragePrecision *float64 `json:"minAcceptableMeanAveragePrecision,omitempty"`
}
