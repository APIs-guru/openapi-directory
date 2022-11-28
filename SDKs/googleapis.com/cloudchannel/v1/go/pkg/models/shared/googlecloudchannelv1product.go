package shared

// GoogleCloudChannelV1Product
// A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
type GoogleCloudChannelV1Product struct {
	MarketingInfo *GoogleCloudChannelV1MarketingInfo `json:"marketingInfo,omitempty"`
	Name          *string                            `json:"name,omitempty"`
}
