package shared

type GoogleCloudRetailV2alphaListModelsResponse struct {
	Models        []GoogleCloudRetailV2alphaModel `json:"models"`
	NextPageToken *string                         `json:"nextPageToken"`
}
