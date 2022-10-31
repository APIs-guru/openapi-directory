package shared



type TaxEditFields struct {
    CategoryID *int32 `json:"category_id,omitempty"`
    Country *string `json:"country,omitempty"`
    Fixed *bool `json:"fixed,omitempty"`
    Name *string `json:"name,omitempty"`
    Region *string `json:"region,omitempty"`
    Shipping *bool `json:"shipping,omitempty"`
    Tax *float32 `json:"tax,omitempty"`
    
}

