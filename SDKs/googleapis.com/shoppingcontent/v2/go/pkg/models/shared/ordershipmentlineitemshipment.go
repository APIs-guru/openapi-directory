package shared



type OrderShipmentLineItemShipment struct {
    LineItemID *string `json:"lineItemId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    Quantity *int64 `json:"quantity,omitempty"`
    
}

