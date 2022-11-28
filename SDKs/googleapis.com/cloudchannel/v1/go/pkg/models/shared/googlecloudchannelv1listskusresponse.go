package shared

// GoogleCloudChannelV1ListSkusResponse
// Response message for ListSkus.
type GoogleCloudChannelV1ListSkusResponse struct {
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
	Skus          []GoogleCloudChannelV1Sku `json:"skus,omitempty"`
}
