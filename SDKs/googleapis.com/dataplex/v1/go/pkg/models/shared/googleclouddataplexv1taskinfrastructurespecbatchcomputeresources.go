package shared

// GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources
// Batch compute resources associated with the task.
type GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources struct {
	ExecutorsCount    *int32 `json:"executorsCount,omitempty"`
	MaxExecutorsCount *int32 `json:"maxExecutorsCount,omitempty"`
}
