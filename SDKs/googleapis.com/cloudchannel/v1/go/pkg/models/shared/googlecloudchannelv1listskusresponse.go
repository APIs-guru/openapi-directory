package shared

type GoogleCloudChannelV1ListSkusResponse struct {
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
	Skus          []GoogleCloudChannelV1Sku `json:"skus,omitempty"`
}
