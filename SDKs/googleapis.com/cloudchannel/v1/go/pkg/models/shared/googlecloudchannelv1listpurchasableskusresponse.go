package shared

type GoogleCloudChannelV1ListPurchasableSkusResponse struct {
	NextPageToken   *string                              `json:"nextPageToken,omitempty"`
	PurchasableSkus []GoogleCloudChannelV1PurchasableSku `json:"purchasableSkus,omitempty"`
}
