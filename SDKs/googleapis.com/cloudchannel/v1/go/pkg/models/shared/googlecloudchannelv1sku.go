package shared

type GoogleCloudChannelV1Sku struct {
	MarketingInfo *GoogleCloudChannelV1MarketingInfo `json:"marketingInfo"`
	Name          *string                            `json:"name"`
	Product       *GoogleCloudChannelV1Product       `json:"product"`
}
