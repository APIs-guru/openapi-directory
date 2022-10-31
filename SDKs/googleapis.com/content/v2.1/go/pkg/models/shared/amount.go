package shared



type Amount struct {
    PriceAmount *Price `json:"priceAmount,omitempty"`
    TaxAmount *Price `json:"taxAmount,omitempty"`
    
}

