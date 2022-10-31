package shared



type ProductAmount struct {
    PriceAmount *Price `json:"priceAmount,omitempty"`
    RemittedTaxAmount *Price `json:"remittedTaxAmount,omitempty"`
    TaxAmount *Price `json:"taxAmount,omitempty"`
    
}

