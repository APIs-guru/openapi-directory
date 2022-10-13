package shared

type Service struct {
	Active                 *bool                   `json:"active"`
	Currency               *string                 `json:"currency"`
	DeliveryCountry        *string                 `json:"deliveryCountry"`
	DeliveryTime           *DeliveryTime           `json:"deliveryTime"`
	Eligibility            *string                 `json:"eligibility"`
	MinimumOrderValue      *Price                  `json:"minimumOrderValue"`
	MinimumOrderValueTable *MinimumOrderValueTable `json:"minimumOrderValueTable"`
	Name                   *string                 `json:"name"`
	PickupService          *PickupCarrierService   `json:"pickupService"`
	RateGroups             []RateGroup             `json:"rateGroups"`
	ShipmentType           *string                 `json:"shipmentType"`
}
