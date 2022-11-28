package shared

// GoogleCloudServicebrokerV1alpha1ListBindingsResponse
// The response for the `ListBindings()` method.
type GoogleCloudServicebrokerV1alpha1ListBindingsResponse struct {
	Bindings      []GoogleCloudServicebrokerV1alpha1Binding
	Description   *string
	NextPageToken *string
}
