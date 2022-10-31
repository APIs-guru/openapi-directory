package shared



type JobStatus struct {
    Conditions []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
    ExecutionCount *int32 `json:"executionCount,omitempty"`
    LatestCreatedExecution *ExecutionReference `json:"latestCreatedExecution,omitempty"`
    ObservedGeneration *int32 `json:"observedGeneration,omitempty"`
    
}

