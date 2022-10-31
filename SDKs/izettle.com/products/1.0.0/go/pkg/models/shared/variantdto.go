package shared



type VariantDto struct {
    Barcode *string `json:"barcode,omitempty"`
    CostPrice *Price `json:"costPrice,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Options []VariantOption `json:"options,omitempty"`
    Presentation *PresentationDto `json:"presentation,omitempty"`
    Price *Price `json:"price,omitempty"`
    Sku *string `json:"sku,omitempty"`
    UUID string `json:"uuid"`
    VatPercentage *float64 `json:"vatPercentage,omitempty"`
    
}

