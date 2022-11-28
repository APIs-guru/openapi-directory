package shared

// GoogleCloudRetailV2alphaPriceInfoPriceRange
// The price range of all variant Product having the same Product.primary_product_id.
type GoogleCloudRetailV2alphaPriceInfoPriceRange struct {
	OriginalPrice *GoogleCloudRetailV2alphaInterval `json:"originalPrice,omitempty"`
	Price         *GoogleCloudRetailV2alphaInterval `json:"price,omitempty"`
}
