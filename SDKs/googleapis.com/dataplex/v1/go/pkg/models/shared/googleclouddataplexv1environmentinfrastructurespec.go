package shared

// GoogleCloudDataplexV1EnvironmentInfrastructureSpec
// Configuration for the underlying infrastructure used to run workloads.
type GoogleCloudDataplexV1EnvironmentInfrastructureSpec struct {
	Compute *GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources `json:"compute,omitempty"`
	OsImage *GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime   `json:"osImage,omitempty"`
}
