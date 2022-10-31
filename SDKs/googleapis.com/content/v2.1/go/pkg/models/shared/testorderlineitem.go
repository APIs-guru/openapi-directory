package shared



type TestOrderLineItem struct {
    Product *TestOrderLineItemProduct `json:"product,omitempty"`
    QuantityOrdered *int64 `json:"quantityOrdered,omitempty"`
    ReturnInfo *OrderLineItemReturnInfo `json:"returnInfo,omitempty"`
    ShippingDetails *OrderLineItemShippingDetails `json:"shippingDetails,omitempty"`
    
}

