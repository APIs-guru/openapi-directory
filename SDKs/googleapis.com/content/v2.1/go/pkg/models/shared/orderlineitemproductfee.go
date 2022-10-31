package shared



type OrderLineItemProductFee struct {
    Amount *Price `json:"amount,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

