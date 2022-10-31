package shared



type PosSaleRequest struct {
    ContentLanguage *string `json:"contentLanguage,omitempty"`
    Gtin *string `json:"gtin,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    Price *Price `json:"price,omitempty"`
    Quantity *string `json:"quantity,omitempty"`
    SaleID *string `json:"saleId,omitempty"`
    StoreCode *string `json:"storeCode,omitempty"`
    TargetCountry *string `json:"targetCountry,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    
}

