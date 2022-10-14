package shared

type ChannelToStoreLinkDetails struct {
	MerchantID *string `json:"merchantId,omitempty"`
	StoreName  *string `json:"storeName,omitempty"`
	StoreURL   *string `json:"storeUrl,omitempty"`
}
