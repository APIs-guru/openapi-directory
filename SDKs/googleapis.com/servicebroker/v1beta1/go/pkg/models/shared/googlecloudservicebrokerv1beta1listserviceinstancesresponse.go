package shared

// GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
// The response for the `ListServiceInstances()` method.
type GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse struct {
	Description   *string
	Instances     []GoogleCloudServicebrokerV1beta1ServiceInstance
	NextPageToken *string
}
