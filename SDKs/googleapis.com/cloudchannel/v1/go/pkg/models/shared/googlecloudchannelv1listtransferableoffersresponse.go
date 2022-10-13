package shared

type GoogleCloudChannelV1ListTransferableOffersResponse struct {
	NextPageToken      *string                                 `json:"nextPageToken"`
	TransferableOffers []GoogleCloudChannelV1TransferableOffer `json:"transferableOffers"`
}
