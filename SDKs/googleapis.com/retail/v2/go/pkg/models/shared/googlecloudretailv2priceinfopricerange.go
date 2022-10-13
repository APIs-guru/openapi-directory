package shared

type GoogleCloudRetailV2PriceInfoPriceRange struct {
	OriginalPrice *GoogleCloudRetailV2Interval `json:"originalPrice"`
	Price         *GoogleCloudRetailV2Interval `json:"price"`
}
