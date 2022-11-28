package shared

// RegionalInventory
// Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
type RegionalInventory struct {
	Availability           *string           `json:"availability,omitempty"`
	CustomAttributes       []CustomAttribute `json:"customAttributes,omitempty"`
	Kind                   *string           `json:"kind,omitempty"`
	Price                  *Price            `json:"price,omitempty"`
	RegionID               *string           `json:"regionId,omitempty"`
	SalePrice              *Price            `json:"salePrice,omitempty"`
	SalePriceEffectiveDate *string           `json:"salePriceEffectiveDate,omitempty"`
}
