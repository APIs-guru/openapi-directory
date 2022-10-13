package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpec struct {
	Compute *GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources `json:"compute"`
	OsImage *GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime   `json:"osImage"`
}
