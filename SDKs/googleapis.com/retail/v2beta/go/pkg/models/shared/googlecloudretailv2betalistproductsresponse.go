package shared

type GoogleCloudRetailV2betaListProductsResponse struct {
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	Products      []GoogleCloudRetailV2betaProduct `json:"products,omitempty"`
}
