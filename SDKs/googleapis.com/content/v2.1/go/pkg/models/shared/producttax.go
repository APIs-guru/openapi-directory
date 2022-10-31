package shared



type ProductTax struct {
    Country *string `json:"country,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    Region *string `json:"region,omitempty"`
    TaxShip *bool `json:"taxShip,omitempty"`
    
}

