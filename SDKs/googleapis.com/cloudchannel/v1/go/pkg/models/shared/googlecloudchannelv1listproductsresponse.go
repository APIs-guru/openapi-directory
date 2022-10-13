package shared

type GoogleCloudChannelV1ListProductsResponse struct {
	NextPageToken *string                       `json:"nextPageToken"`
	Products      []GoogleCloudChannelV1Product `json:"products"`
}
