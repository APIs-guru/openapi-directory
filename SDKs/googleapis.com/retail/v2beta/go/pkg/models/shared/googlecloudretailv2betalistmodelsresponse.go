package shared

type GoogleCloudRetailV2betaListModelsResponse struct {
	Models        []GoogleCloudRetailV2betaModel `json:"models"`
	NextPageToken *string                        `json:"nextPageToken"`
}
