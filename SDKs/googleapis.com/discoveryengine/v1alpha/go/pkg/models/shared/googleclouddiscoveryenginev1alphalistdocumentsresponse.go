package shared

// GoogleCloudDiscoveryengineV1alphaListDocumentsResponse
// Response message for DocumentService.ListDocuments method.
type GoogleCloudDiscoveryengineV1alphaListDocumentsResponse struct {
	Documents     []GoogleCloudDiscoveryengineV1alphaDocument `json:"documents,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
