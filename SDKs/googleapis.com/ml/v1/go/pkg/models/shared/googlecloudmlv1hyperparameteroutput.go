package shared

type GoogleCloudMlV1HyperparameterOutputStateEnum string

const (
	GoogleCloudMlV1HyperparameterOutputStateEnumStateUnspecified GoogleCloudMlV1HyperparameterOutputStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudMlV1HyperparameterOutputStateEnumQueued           GoogleCloudMlV1HyperparameterOutputStateEnum = "QUEUED"
	GoogleCloudMlV1HyperparameterOutputStateEnumPreparing        GoogleCloudMlV1HyperparameterOutputStateEnum = "PREPARING"
	GoogleCloudMlV1HyperparameterOutputStateEnumRunning          GoogleCloudMlV1HyperparameterOutputStateEnum = "RUNNING"
	GoogleCloudMlV1HyperparameterOutputStateEnumSucceeded        GoogleCloudMlV1HyperparameterOutputStateEnum = "SUCCEEDED"
	GoogleCloudMlV1HyperparameterOutputStateEnumFailed           GoogleCloudMlV1HyperparameterOutputStateEnum = "FAILED"
	GoogleCloudMlV1HyperparameterOutputStateEnumCancelling       GoogleCloudMlV1HyperparameterOutputStateEnum = "CANCELLING"
	GoogleCloudMlV1HyperparameterOutputStateEnumCancelled        GoogleCloudMlV1HyperparameterOutputStateEnum = "CANCELLED"
)

type GoogleCloudMlV1HyperparameterOutput struct {
	AllMetrics             []GoogleCloudMlV1HyperparameterOutputHyperparameterMetric `json:"allMetrics,omitempty"`
	BuiltInAlgorithmOutput *GoogleCloudMlV1BuiltInAlgorithmOutput                    `json:"builtInAlgorithmOutput,omitempty"`
	EndTime                *string                                                   `json:"endTime,omitempty"`
	FinalMetric            *GoogleCloudMlV1HyperparameterOutputHyperparameterMetric  `json:"finalMetric,omitempty"`
	Hyperparameters        map[string]string                                         `json:"hyperparameters,omitempty"`
	IsTrialStoppedEarly    *bool                                                     `json:"isTrialStoppedEarly,omitempty"`
	StartTime              *string                                                   `json:"startTime,omitempty"`
	State                  *GoogleCloudMlV1HyperparameterOutputStateEnum             `json:"state,omitempty"`
	TrialID                *string                                                   `json:"trialId,omitempty"`
	WebAccessUris          map[string]string                                         `json:"webAccessUris,omitempty"`
}
