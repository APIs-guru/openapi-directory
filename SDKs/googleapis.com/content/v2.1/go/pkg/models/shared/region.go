package shared

// Region
// Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
type Region struct {
	DisplayName               *string               `json:"displayName,omitempty"`
	GeotargetArea             *RegionGeoTargetArea  `json:"geotargetArea,omitempty"`
	MerchantID                *string               `json:"merchantId,omitempty"`
	PostalCodeArea            *RegionPostalCodeArea `json:"postalCodeArea,omitempty"`
	RegionID                  *string               `json:"regionId,omitempty"`
	RegionalInventoryEligible *bool                 `json:"regionalInventoryEligible,omitempty"`
	ShippingEligible          *bool                 `json:"shippingEligible,omitempty"`
}

// RegionInput
// Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
type RegionInput struct {
	DisplayName    *string               `json:"displayName,omitempty"`
	GeotargetArea  *RegionGeoTargetArea  `json:"geotargetArea,omitempty"`
	PostalCodeArea *RegionPostalCodeArea `json:"postalCodeArea,omitempty"`
}
