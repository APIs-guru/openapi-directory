package shared



type MonetaryAmount struct {
    PriceAmount *Price `json:"priceAmount,omitempty"`
    TaxAmount *Price `json:"taxAmount,omitempty"`
    
}

