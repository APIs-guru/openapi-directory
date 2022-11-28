package shared

// GoogleCloudMlV1TrainingOutputInput
// Represents results of a training job. Output only.
type GoogleCloudMlV1TrainingOutputInput struct {
	BuiltInAlgorithmOutput    *GoogleCloudMlV1BuiltInAlgorithmOutput `json:"builtInAlgorithmOutput,omitempty"`
	CompletedTrialCount       *string                                `json:"completedTrialCount,omitempty"`
	ConsumedMlUnits           *float64                               `json:"consumedMLUnits,omitempty"`
	HyperparameterMetricTag   *string                                `json:"hyperparameterMetricTag,omitempty"`
	IsBuiltInAlgorithmJob     *bool                                  `json:"isBuiltInAlgorithmJob,omitempty"`
	IsHyperparameterTuningJob *bool                                  `json:"isHyperparameterTuningJob,omitempty"`
	Trials                    []GoogleCloudMlV1HyperparameterOutput  `json:"trials,omitempty"`
}

// GoogleCloudMlV1TrainingOutput
// Represents results of a training job. Output only.
type GoogleCloudMlV1TrainingOutput struct {
	BuiltInAlgorithmOutput    *GoogleCloudMlV1BuiltInAlgorithmOutput `json:"builtInAlgorithmOutput,omitempty"`
	CompletedTrialCount       *string                                `json:"completedTrialCount,omitempty"`
	ConsumedMlUnits           *float64                               `json:"consumedMLUnits,omitempty"`
	HyperparameterMetricTag   *string                                `json:"hyperparameterMetricTag,omitempty"`
	IsBuiltInAlgorithmJob     *bool                                  `json:"isBuiltInAlgorithmJob,omitempty"`
	IsHyperparameterTuningJob *bool                                  `json:"isHyperparameterTuningJob,omitempty"`
	Trials                    []GoogleCloudMlV1HyperparameterOutput  `json:"trials,omitempty"`
	WebAccessUris             map[string]string                      `json:"webAccessUris,omitempty"`
}
