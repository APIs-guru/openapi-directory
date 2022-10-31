package shared



type OrderLineItemShippingDetailsMethod struct {
    Carrier *string `json:"carrier,omitempty"`
    MaxDaysInTransit *int64 `json:"maxDaysInTransit,omitempty"`
    MethodName *string `json:"methodName,omitempty"`
    MinDaysInTransit *int64 `json:"minDaysInTransit,omitempty"`
    
}

