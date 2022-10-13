package shared

type GoogleCloudChannelV1ListPurchasableSkusResponse struct {
	NextPageToken   *string                              `json:"nextPageToken"`
	PurchasableSkus []GoogleCloudChannelV1PurchasableSku `json:"purchasableSkus"`
}
