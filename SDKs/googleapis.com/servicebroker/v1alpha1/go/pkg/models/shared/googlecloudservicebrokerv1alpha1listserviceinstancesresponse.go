package shared

// GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse
// The response for the `ListServiceInstances()` method.
type GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse struct {
	Description   *string
	Instances     []GoogleCloudServicebrokerV1alpha1ServiceInstance
	NextPageToken *string
}
