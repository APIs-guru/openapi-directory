package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources struct {
	DiskSizeGb   *int32 `json:"diskSizeGb,omitempty"`
	MaxNodeCount *int32 `json:"maxNodeCount,omitempty"`
	NodeCount    *int32 `json:"nodeCount,omitempty"`
}
