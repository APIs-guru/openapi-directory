package shared



type ProductOptionVariantEdit struct {
    Name *string `json:"name,omitempty"`
    ProductOptionID *int32 `json:"product_option_id,omitempty"`
    ProductOptionPosition *int32 `json:"product_option_position,omitempty"`
    ProductOptionValueID *int32 `json:"product_option_value_id,omitempty"`
    ProductValuePosition *int32 `json:"product_value_position,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

