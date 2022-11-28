package shared

// GoogleCloudChannelV1ListTransferableOffersResponse
// Response message for CloudChannelService.ListTransferableOffers.
type GoogleCloudChannelV1ListTransferableOffersResponse struct {
	NextPageToken      *string                                 `json:"nextPageToken,omitempty"`
	TransferableOffers []GoogleCloudChannelV1TransferableOffer `json:"transferableOffers,omitempty"`
}
