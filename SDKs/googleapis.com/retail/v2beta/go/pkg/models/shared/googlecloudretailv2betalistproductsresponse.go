package shared

type GoogleCloudRetailV2betaListProductsResponse struct {
	NextPageToken *string                          `json:"nextPageToken"`
	Products      []GoogleCloudRetailV2betaProduct `json:"products"`
}
