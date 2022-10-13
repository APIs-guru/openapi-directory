package shared

type RegionalInventory struct {
	Availability           *string           `json:"availability"`
	CustomAttributes       []CustomAttribute `json:"customAttributes"`
	Kind                   *string           `json:"kind"`
	Price                  *Price            `json:"price"`
	RegionID               *string           `json:"regionId"`
	SalePrice              *Price            `json:"salePrice"`
	SalePriceEffectiveDate *string           `json:"salePriceEffectiveDate"`
}
