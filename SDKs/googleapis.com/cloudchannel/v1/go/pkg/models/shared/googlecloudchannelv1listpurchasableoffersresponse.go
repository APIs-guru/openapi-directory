package shared

type GoogleCloudChannelV1ListPurchasableOffersResponse struct {
	NextPageToken     *string                                `json:"nextPageToken"`
	PurchasableOffers []GoogleCloudChannelV1PurchasableOffer `json:"purchasableOffers"`
}
