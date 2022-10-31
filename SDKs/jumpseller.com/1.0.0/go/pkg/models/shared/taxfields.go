package shared



type TaxFields struct {
    CategoryID *int32 `json:"category_id,omitempty"`
    Country *string `json:"country,omitempty"`
    Fixed *bool `json:"fixed,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Region *string `json:"region,omitempty"`
    Shipping *bool `json:"shipping,omitempty"`
    TaxAmount *float32 `json:"tax_amount,omitempty"`
    
}

