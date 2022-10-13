package shared

type GoogleCloudRetailV2PriceInfo struct {
	Cost               *float32                                `json:"cost"`
	CurrencyCode       *string                                 `json:"currencyCode"`
	OriginalPrice      *float32                                `json:"originalPrice"`
	Price              *float32                                `json:"price"`
	PriceEffectiveTime *string                                 `json:"priceEffectiveTime"`
	PriceExpireTime    *string                                 `json:"priceExpireTime"`
	PriceRange         *GoogleCloudRetailV2PriceInfoPriceRange `json:"priceRange"`
}
