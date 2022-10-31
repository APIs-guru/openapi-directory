package shared



type OrderreturnsPartialRefund struct {
    PriceAmount *Price `json:"priceAmount,omitempty"`
    TaxAmount *Price `json:"taxAmount,omitempty"`
    
}

