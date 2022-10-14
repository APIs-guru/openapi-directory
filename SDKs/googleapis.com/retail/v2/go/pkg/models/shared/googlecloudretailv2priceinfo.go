package shared

type GoogleCloudRetailV2PriceInfo struct {
	Cost               *float32                                `json:"cost,omitempty"`
	CurrencyCode       *string                                 `json:"currencyCode,omitempty"`
	OriginalPrice      *float32                                `json:"originalPrice,omitempty"`
	Price              *float32                                `json:"price,omitempty"`
	PriceEffectiveTime *string                                 `json:"priceEffectiveTime,omitempty"`
	PriceExpireTime    *string                                 `json:"priceExpireTime,omitempty"`
	PriceRange         *GoogleCloudRetailV2PriceInfoPriceRange `json:"priceRange,omitempty"`
}
