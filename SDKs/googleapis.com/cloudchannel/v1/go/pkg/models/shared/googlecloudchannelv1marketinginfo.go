package shared

// GoogleCloudChannelV1MarketingInfo
// Represents the marketing information for a Product, SKU or Offer.
type GoogleCloudChannelV1MarketingInfo struct {
	DefaultLogo *GoogleCloudChannelV1Media `json:"defaultLogo,omitempty"`
	Description *string                    `json:"description,omitempty"`
	DisplayName *string                    `json:"displayName,omitempty"`
}
