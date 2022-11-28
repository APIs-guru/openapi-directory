package shared

// GoogleCloudRetailV2betaListModelsResponse
// Response to a ListModelRequest.
type GoogleCloudRetailV2betaListModelsResponse struct {
	Models        []GoogleCloudRetailV2betaModel `json:"models,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
