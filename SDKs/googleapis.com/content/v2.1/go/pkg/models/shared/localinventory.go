package shared

// LocalInventory
// Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
type LocalInventory struct {
	Availability           *string           `json:"availability,omitempty"`
	CustomAttributes       []CustomAttribute `json:"customAttributes,omitempty"`
	InstoreProductLocation *string           `json:"instoreProductLocation,omitempty"`
	Kind                   *string           `json:"kind,omitempty"`
	PickupMethod           *string           `json:"pickupMethod,omitempty"`
	PickupSLA              *string           `json:"pickupSla,omitempty"`
	Price                  *Price            `json:"price,omitempty"`
	Quantity               *int64            `json:"quantity,omitempty"`
	SalePrice              *Price            `json:"salePrice,omitempty"`
	SalePriceEffectiveDate *string           `json:"salePriceEffectiveDate,omitempty"`
	StoreCode              *string           `json:"storeCode,omitempty"`
}
