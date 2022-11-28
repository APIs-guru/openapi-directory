package shared

// GoogleCloudRetailV2betaPriceInfoPriceRange
// The price range of all variant Product having the same Product.primary_product_id.
type GoogleCloudRetailV2betaPriceInfoPriceRange struct {
	OriginalPrice *GoogleCloudRetailV2betaInterval `json:"originalPrice,omitempty"`
	Price         *GoogleCloudRetailV2betaInterval `json:"price,omitempty"`
}
