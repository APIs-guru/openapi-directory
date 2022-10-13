package shared

type GoogleCloudRetailV2alphaListProductsResponse struct {
	NextPageToken *string                           `json:"nextPageToken"`
	Products      []GoogleCloudRetailV2alphaProduct `json:"products"`
	TotalSize     *int32                            `json:"totalSize"`
}
