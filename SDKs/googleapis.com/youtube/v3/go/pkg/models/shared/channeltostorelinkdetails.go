package shared

// ChannelToStoreLinkDetails
// Information specific to a store on a merchandising platform linked to a YouTube channel.
type ChannelToStoreLinkDetails struct {
	MerchantID *string `json:"merchantId,omitempty"`
	StoreName  *string `json:"storeName,omitempty"`
	StoreURL   *string `json:"storeUrl,omitempty"`
}
