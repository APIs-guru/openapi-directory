package shared



type OrderLineItemShippingDetails struct {
    DeliverByDate *string `json:"deliverByDate,omitempty"`
    Method *OrderLineItemShippingDetailsMethod `json:"method,omitempty"`
    ShipByDate *string `json:"shipByDate,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

