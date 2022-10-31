package shared




type GoogleCloudMlV1HyperparameterSpecAlgorithmEnum string

const (
    GoogleCloudMlV1HyperparameterSpecAlgorithmEnumAlgorithmUnspecified GoogleCloudMlV1HyperparameterSpecAlgorithmEnum = "ALGORITHM_UNSPECIFIED"
GoogleCloudMlV1HyperparameterSpecAlgorithmEnumGridSearch GoogleCloudMlV1HyperparameterSpecAlgorithmEnum = "GRID_SEARCH"
GoogleCloudMlV1HyperparameterSpecAlgorithmEnumRandomSearch GoogleCloudMlV1HyperparameterSpecAlgorithmEnum = "RANDOM_SEARCH"
)



type GoogleCloudMlV1HyperparameterSpecGoalEnum string

const (
    GoogleCloudMlV1HyperparameterSpecGoalEnumGoalTypeUnspecified GoogleCloudMlV1HyperparameterSpecGoalEnum = "GOAL_TYPE_UNSPECIFIED"
GoogleCloudMlV1HyperparameterSpecGoalEnumMaximize GoogleCloudMlV1HyperparameterSpecGoalEnum = "MAXIMIZE"
GoogleCloudMlV1HyperparameterSpecGoalEnumMinimize GoogleCloudMlV1HyperparameterSpecGoalEnum = "MINIMIZE"
)


type GoogleCloudMlV1HyperparameterSpec struct {
    Algorithm *GoogleCloudMlV1HyperparameterSpecAlgorithmEnum `json:"algorithm,omitempty"`
    EnableTrialEarlyStopping *bool `json:"enableTrialEarlyStopping,omitempty"`
    Goal *GoogleCloudMlV1HyperparameterSpecGoalEnum `json:"goal,omitempty"`
    HyperparameterMetricTag *string `json:"hyperparameterMetricTag,omitempty"`
    MaxFailedTrials *int32 `json:"maxFailedTrials,omitempty"`
    MaxParallelTrials *int32 `json:"maxParallelTrials,omitempty"`
    MaxTrials *int32 `json:"maxTrials,omitempty"`
    Params []GoogleCloudMlV1ParameterSpec `json:"params,omitempty"`
    ResumePreviousJobID *string `json:"resumePreviousJobId,omitempty"`
    
}

