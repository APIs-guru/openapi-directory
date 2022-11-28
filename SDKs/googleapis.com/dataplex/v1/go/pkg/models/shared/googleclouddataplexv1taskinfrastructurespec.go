package shared

// GoogleCloudDataplexV1TaskInfrastructureSpec
// Configuration for the underlying infrastructure used to run workloads.
type GoogleCloudDataplexV1TaskInfrastructureSpec struct {
	Batch          *GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources `json:"batch,omitempty"`
	ContainerImage *GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime `json:"containerImage,omitempty"`
	VpcNetwork     *GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork            `json:"vpcNetwork,omitempty"`
}
