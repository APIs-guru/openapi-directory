package shared

type LocalInventory struct {
	Availability           *string           `json:"availability"`
	CustomAttributes       []CustomAttribute `json:"customAttributes"`
	InstoreProductLocation *string           `json:"instoreProductLocation"`
	Kind                   *string           `json:"kind"`
	PickupMethod           *string           `json:"pickupMethod"`
	PickupSLA              *string           `json:"pickupSla"`
	Price                  *Price            `json:"price"`
	Quantity               *int64            `json:"quantity"`
	SalePrice              *Price            `json:"salePrice"`
	SalePriceEffectiveDate *string           `json:"salePriceEffectiveDate"`
	StoreCode              *string           `json:"storeCode"`
}
