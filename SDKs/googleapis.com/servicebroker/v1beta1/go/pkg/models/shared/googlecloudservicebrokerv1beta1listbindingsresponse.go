package shared

// GoogleCloudServicebrokerV1beta1ListBindingsResponse
// The response for the `ListBindings()` method.
type GoogleCloudServicebrokerV1beta1ListBindingsResponse struct {
	Bindings      []GoogleCloudServicebrokerV1beta1Binding
	Description   *string
	NextPageToken *string
}
