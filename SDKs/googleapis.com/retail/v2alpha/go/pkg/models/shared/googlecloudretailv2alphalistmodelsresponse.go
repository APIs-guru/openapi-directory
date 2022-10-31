package shared

type GoogleCloudRetailV2alphaListModelsResponse struct {
	Models        []GoogleCloudRetailV2alphaModel `json:"models,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
