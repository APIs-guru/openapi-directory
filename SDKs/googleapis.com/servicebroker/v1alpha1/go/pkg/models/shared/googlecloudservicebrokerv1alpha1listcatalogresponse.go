package shared

// GoogleCloudServicebrokerV1alpha1ListCatalogResponse
// Response message for the `ListCatalog()` method.
type GoogleCloudServicebrokerV1alpha1ListCatalogResponse struct {
	Description   *string
	NextPageToken *string
	Services      []GoogleCloudServicebrokerV1alpha1Service
}
