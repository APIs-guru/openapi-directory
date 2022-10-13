package shared

type JobStatus struct {
	Conditions             []GoogleCloudRunV1Condition `json:"conditions"`
	ExecutionCount         *int32                      `json:"executionCount"`
	LatestCreatedExecution *ExecutionReference         `json:"latestCreatedExecution"`
	ObservedGeneration     *int32                      `json:"observedGeneration"`
}
