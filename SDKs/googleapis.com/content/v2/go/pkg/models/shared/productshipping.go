package shared

type ProductShipping struct {
	Country           *string `json:"country"`
	LocationGroupName *string `json:"locationGroupName"`
	LocationID        *string `json:"locationId"`
	PostalCode        *string `json:"postalCode"`
	Price             *Price  `json:"price"`
	Region            *string `json:"region"`
	Service           *string `json:"service"`
}
