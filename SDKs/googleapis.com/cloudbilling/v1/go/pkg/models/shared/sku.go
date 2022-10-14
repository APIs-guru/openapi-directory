package shared

type Sku struct {
	Category            *Category     `json:"category,omitempty"`
	Description         *string       `json:"description,omitempty"`
	GeoTaxonomy         *GeoTaxonomy  `json:"geoTaxonomy,omitempty"`
	Name                *string       `json:"name,omitempty"`
	PricingInfo         []PricingInfo `json:"pricingInfo,omitempty"`
	ServiceProviderName *string       `json:"serviceProviderName,omitempty"`
	ServiceRegions      []string      `json:"serviceRegions,omitempty"`
	SkuID               *string       `json:"skuId,omitempty"`
}
