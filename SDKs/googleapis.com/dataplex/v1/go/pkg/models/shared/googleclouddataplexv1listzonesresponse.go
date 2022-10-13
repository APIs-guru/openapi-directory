package shared

type GoogleCloudDataplexV1ListZonesResponse struct {
	NextPageToken *string                     `json:"nextPageToken"`
	Zones         []GoogleCloudDataplexV1Zone `json:"zones"`
}
