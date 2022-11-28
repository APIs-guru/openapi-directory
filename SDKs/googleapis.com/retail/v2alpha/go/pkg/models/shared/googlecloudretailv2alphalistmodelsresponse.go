package shared

// GoogleCloudRetailV2alphaListModelsResponse
// Response to a ListModelRequest.
type GoogleCloudRetailV2alphaListModelsResponse struct {
	Models        []GoogleCloudRetailV2alphaModel `json:"models,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
