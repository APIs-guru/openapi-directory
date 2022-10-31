package shared



type VariantEditFields struct {
    ImageID *int32 `json:"image_id,omitempty"`
    Options []ProductOptionVariantEdit `json:"options,omitempty"`
    Price *float32 `json:"price,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Stock *int32 `json:"stock,omitempty"`
    StockUnlimited *bool `json:"stock_unlimited,omitempty"`
    
}

