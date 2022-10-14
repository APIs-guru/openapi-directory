package shared

type GoogleCloudRetailV2PriceInfoPriceRange struct {
	OriginalPrice *GoogleCloudRetailV2Interval `json:"originalPrice,omitempty"`
	Price         *GoogleCloudRetailV2Interval `json:"price,omitempty"`
}
