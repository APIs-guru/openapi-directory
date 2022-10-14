package shared

type GoogleCloudDataplexV1EnvironmentInfrastructureSpec struct {
	Compute *GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources `json:"compute,omitempty"`
	OsImage *GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime   `json:"osImage,omitempty"`
}
