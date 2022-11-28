package shared

// GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources
// Compute resources associated with the analyze interactive workloads.
type GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources struct {
	DiskSizeGb   *int32 `json:"diskSizeGb,omitempty"`
	MaxNodeCount *int32 `json:"maxNodeCount,omitempty"`
	NodeCount    *int32 `json:"nodeCount,omitempty"`
}
