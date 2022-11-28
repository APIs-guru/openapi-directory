package shared

// GoogleCloudDiscoveryengineV1betaListDocumentsResponse
// Response message for DocumentService.ListDocuments method.
type GoogleCloudDiscoveryengineV1betaListDocumentsResponse struct {
	Documents     []GoogleCloudDiscoveryengineV1betaDocument `json:"documents,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
