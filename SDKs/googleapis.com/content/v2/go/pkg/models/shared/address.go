package shared



type Address struct {
    AdministrativeArea *string `json:"administrativeArea,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    StreetAddress *string `json:"streetAddress,omitempty"`
    
}

