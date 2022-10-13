package shared

type GoogleCloudChannelV1ListOffersResponse struct {
	NextPageToken *string                     `json:"nextPageToken"`
	Offers        []GoogleCloudChannelV1Offer `json:"offers"`
}
