package shared

type Region struct {
	DisplayName               *string               `json:"displayName"`
	GeotargetArea             *RegionGeoTargetArea  `json:"geotargetArea"`
	MerchantID                *string               `json:"merchantId"`
	PostalCodeArea            *RegionPostalCodeArea `json:"postalCodeArea"`
	RegionID                  *string               `json:"regionId"`
	RegionalInventoryEligible *bool                 `json:"regionalInventoryEligible"`
	ShippingEligible          *bool                 `json:"shippingEligible"`
}
