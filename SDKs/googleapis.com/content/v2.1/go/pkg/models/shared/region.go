package shared

type Region struct {
	DisplayName               *string               `json:"displayName,omitempty"`
	GeotargetArea             *RegionGeoTargetArea  `json:"geotargetArea,omitempty"`
	MerchantID                *string               `json:"merchantId,omitempty"`
	PostalCodeArea            *RegionPostalCodeArea `json:"postalCodeArea,omitempty"`
	RegionID                  *string               `json:"regionId,omitempty"`
	RegionalInventoryEligible *bool                 `json:"regionalInventoryEligible,omitempty"`
	ShippingEligible          *bool                 `json:"shippingEligible,omitempty"`
}
