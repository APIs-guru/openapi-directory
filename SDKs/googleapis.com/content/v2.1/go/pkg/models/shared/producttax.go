package shared

type ProductTax struct {
	Country    *string  `json:"country"`
	LocationID *string  `json:"locationId"`
	PostalCode *string  `json:"postalCode"`
	Rate       *float64 `json:"rate"`
	Region     *string  `json:"region"`
	TaxShip    *bool    `json:"taxShip"`
}
