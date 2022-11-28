package shared

// GoogleCloudChannelV1ListOffersResponse
// Response message for ListOffers.
type GoogleCloudChannelV1ListOffersResponse struct {
	NextPageToken *string                     `json:"nextPageToken,omitempty"`
	Offers        []GoogleCloudChannelV1Offer `json:"offers,omitempty"`
}
