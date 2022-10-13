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
	AllMetrics             []GoogleCloudMlV1HyperparameterOutputHyperparameterMetric `json:"allMetrics"`
	BuiltInAlgorithmOutput *GoogleCloudMlV1BuiltInAlgorithmOutput                    `json:"builtInAlgorithmOutput"`
	EndTime                *string                                                   `json:"endTime"`
	FinalMetric            *GoogleCloudMlV1HyperparameterOutputHyperparameterMetric  `json:"finalMetric"`
	Hyperparameters        map[string]string                                         `json:"hyperparameters"`
	IsTrialStoppedEarly    *bool                                                     `json:"isTrialStoppedEarly"`
	StartTime              *string                                                   `json:"startTime"`
	State                  *GoogleCloudMlV1HyperparameterOutputStateEnum             `json:"state"`
	TrialID                *string                                                   `json:"trialId"`
	WebAccessUris          map[string]string                                         `json:"webAccessUris"`
}
