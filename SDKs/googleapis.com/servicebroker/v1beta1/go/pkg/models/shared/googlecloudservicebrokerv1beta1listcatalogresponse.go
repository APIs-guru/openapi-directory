package shared

// GoogleCloudServicebrokerV1beta1ListCatalogResponse
// Response message for the `ListCatalog()` method.
type GoogleCloudServicebrokerV1beta1ListCatalogResponse struct {
	Description   *string
	NextPageToken *string
	Services      []GoogleCloudServicebrokerV1beta1Service
}
