package shared

// GoogleCloudChannelV1ListPurchasableOffersResponse
// Response message for ListPurchasableOffers.
type GoogleCloudChannelV1ListPurchasableOffersResponse struct {
	NextPageToken     *string                                `json:"nextPageToken,omitempty"`
	PurchasableOffers []GoogleCloudChannelV1PurchasableOffer `json:"purchasableOffers,omitempty"`
}
