package shared

type GoogleCloudRetailV2betaPriceInfo struct {
	Cost               *float32                                    `json:"cost"`
	CurrencyCode       *string                                     `json:"currencyCode"`
	OriginalPrice      *float32                                    `json:"originalPrice"`
	Price              *float32                                    `json:"price"`
	PriceEffectiveTime *string                                     `json:"priceEffectiveTime"`
	PriceExpireTime    *string                                     `json:"priceExpireTime"`
	PriceRange         *GoogleCloudRetailV2betaPriceInfoPriceRange `json:"priceRange"`
}
