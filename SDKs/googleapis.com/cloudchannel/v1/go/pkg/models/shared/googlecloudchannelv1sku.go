package shared

// GoogleCloudChannelV1Sku
// Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
type GoogleCloudChannelV1Sku struct {
	MarketingInfo *GoogleCloudChannelV1MarketingInfo `json:"marketingInfo,omitempty"`
	Name          *string                            `json:"name,omitempty"`
	Product       *GoogleCloudChannelV1Product       `json:"product,omitempty"`
}
