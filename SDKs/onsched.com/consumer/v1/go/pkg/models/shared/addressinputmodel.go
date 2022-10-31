package shared



type AddressInputModel struct {
    AddressLine1 *string `json:"addressLine1,omitempty"`
    AddressLine2 *string `json:"addressLine2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    State *string `json:"state,omitempty"`
    
}

