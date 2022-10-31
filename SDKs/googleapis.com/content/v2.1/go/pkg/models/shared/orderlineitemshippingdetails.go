package shared



type OrderLineItemShippingDetails struct {
    DeliverByDate *string `json:"deliverByDate,omitempty"`
    Method *OrderLineItemShippingDetailsMethod `json:"method,omitempty"`
    PickupPromiseInMinutes *int64 `json:"pickupPromiseInMinutes,omitempty"`
    ShipByDate *string `json:"shipByDate,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

