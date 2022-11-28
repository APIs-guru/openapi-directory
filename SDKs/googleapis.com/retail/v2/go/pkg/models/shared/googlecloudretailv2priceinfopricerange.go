package shared

// GoogleCloudRetailV2PriceInfoPriceRange
// The price range of all variant Product having the same Product.primary_product_id.
type GoogleCloudRetailV2PriceInfoPriceRange struct {
	OriginalPrice *GoogleCloudRetailV2Interval `json:"originalPrice,omitempty"`
	Price         *GoogleCloudRetailV2Interval `json:"price,omitempty"`
}
