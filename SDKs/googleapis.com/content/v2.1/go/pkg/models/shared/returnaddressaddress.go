package shared



type ReturnAddressAddress struct {
    Country *string `json:"country,omitempty"`
    Locality *string `json:"locality,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    RecipientName *string `json:"recipientName,omitempty"`
    Region *string `json:"region,omitempty"`
    StreetAddress []string `json:"streetAddress,omitempty"`
    
}

