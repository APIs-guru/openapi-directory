package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources struct {
	DiskSizeGb   *int32 `json:"diskSizeGb"`
	MaxNodeCount *int32 `json:"maxNodeCount"`
	NodeCount    *int32 `json:"nodeCount"`
}
