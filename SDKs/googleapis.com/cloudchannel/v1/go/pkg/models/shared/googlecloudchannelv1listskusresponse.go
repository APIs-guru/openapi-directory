package shared

type GoogleCloudChannelV1ListSkusResponse struct {
	NextPageToken *string                   `json:"nextPageToken"`
	Skus          []GoogleCloudChannelV1Sku `json:"skus"`
}
