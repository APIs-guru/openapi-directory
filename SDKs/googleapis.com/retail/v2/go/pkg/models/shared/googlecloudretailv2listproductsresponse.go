package shared

type GoogleCloudRetailV2ListProductsResponse struct {
	NextPageToken *string                      `json:"nextPageToken"`
	Products      []GoogleCloudRetailV2Product `json:"products"`
}
