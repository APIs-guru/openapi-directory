package shared

type GoogleCloudMlV1TrainingOutput struct {
	BuiltInAlgorithmOutput    *GoogleCloudMlV1BuiltInAlgorithmOutput `json:"builtInAlgorithmOutput"`
	CompletedTrialCount       *string                                `json:"completedTrialCount"`
	ConsumedMlUnits           *float64                               `json:"consumedMLUnits"`
	HyperparameterMetricTag   *string                                `json:"hyperparameterMetricTag"`
	IsBuiltInAlgorithmJob     *bool                                  `json:"isBuiltInAlgorithmJob"`
	IsHyperparameterTuningJob *bool                                  `json:"isHyperparameterTuningJob"`
	Trials                    []GoogleCloudMlV1HyperparameterOutput  `json:"trials"`
	WebAccessUris             map[string]string                      `json:"webAccessUris"`
}
