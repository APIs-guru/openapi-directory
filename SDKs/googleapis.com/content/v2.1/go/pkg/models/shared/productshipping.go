package shared

type ProductShipping struct {
	Country           *string `json:"country,omitempty"`
	LocationGroupName *string `json:"locationGroupName,omitempty"`
	LocationID        *string `json:"locationId,omitempty"`
	MaxHandlingTime   *string `json:"maxHandlingTime,omitempty"`
	MaxTransitTime    *string `json:"maxTransitTime,omitempty"`
	MinHandlingTime   *string `json:"minHandlingTime,omitempty"`
	MinTransitTime    *string `json:"minTransitTime,omitempty"`
	PostalCode        *string `json:"postalCode,omitempty"`
	Price             *Price  `json:"price,omitempty"`
	Region            *string `json:"region,omitempty"`
	Service           *string `json:"service,omitempty"`
}
