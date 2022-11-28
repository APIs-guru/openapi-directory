package shared

// GoogleCloudDataplexV1ListZonesResponse
// List zones response.
type GoogleCloudDataplexV1ListZonesResponse struct {
	NextPageToken *string                     `json:"nextPageToken,omitempty"`
	Zones         []GoogleCloudDataplexV1Zone `json:"zones,omitempty"`
}
