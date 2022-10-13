package shared

type ChannelToStoreLinkDetails struct {
	MerchantID *string `json:"merchantId"`
	StoreName  *string `json:"storeName"`
	StoreURL   *string `json:"storeUrl"`
}
