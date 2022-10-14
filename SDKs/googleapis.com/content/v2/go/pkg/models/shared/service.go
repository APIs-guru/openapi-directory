package shared

type Service struct {
	Active                 *bool                   `json:"active,omitempty"`
	Currency               *string                 `json:"currency,omitempty"`
	DeliveryCountry        *string                 `json:"deliveryCountry,omitempty"`
	DeliveryTime           *DeliveryTime           `json:"deliveryTime,omitempty"`
	Eligibility            *string                 `json:"eligibility,omitempty"`
	MinimumOrderValue      *Price                  `json:"minimumOrderValue,omitempty"`
	MinimumOrderValueTable *MinimumOrderValueTable `json:"minimumOrderValueTable,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	PickupService          *PickupCarrierService   `json:"pickupService,omitempty"`
	RateGroups             []RateGroup             `json:"rateGroups,omitempty"`
	ShipmentType           *string                 `json:"shipmentType,omitempty"`
}
