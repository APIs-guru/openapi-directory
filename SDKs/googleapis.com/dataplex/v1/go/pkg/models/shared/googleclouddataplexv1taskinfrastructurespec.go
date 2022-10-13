package shared

type GoogleCloudDataplexV1TaskInfrastructureSpec struct {
	Batch          *GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources `json:"batch"`
	ContainerImage *GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime `json:"containerImage"`
	VpcNetwork     *GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork            `json:"vpcNetwork"`
}
