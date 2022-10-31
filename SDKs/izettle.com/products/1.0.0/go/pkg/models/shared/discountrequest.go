package shared



type DiscountRequest struct {
    Amount *Price `json:"amount,omitempty"`
    Description *string `json:"description,omitempty"`
    ExternalReference *string `json:"externalReference,omitempty"`
    ImageLookupKeys []string `json:"imageLookupKeys,omitempty"`
    Name *string `json:"name,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    UUID string `json:"uuid"`
    
}

