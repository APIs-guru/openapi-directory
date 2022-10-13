package shared

type Sku struct {
	Category            *Category     `json:"category"`
	Description         *string       `json:"description"`
	GeoTaxonomy         *GeoTaxonomy  `json:"geoTaxonomy"`
	Name                *string       `json:"name"`
	PricingInfo         []PricingInfo `json:"pricingInfo"`
	ServiceProviderName *string       `json:"serviceProviderName"`
	ServiceRegions      []string      `json:"serviceRegions"`
	SkuID               *string       `json:"skuId"`
}
