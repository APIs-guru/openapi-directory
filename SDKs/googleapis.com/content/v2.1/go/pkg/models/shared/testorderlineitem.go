package shared

type TestOrderLineItem struct {
	Product         *TestOrderLineItemProduct     `json:"product"`
	QuantityOrdered *int64                        `json:"quantityOrdered"`
	ReturnInfo      *OrderLineItemReturnInfo      `json:"returnInfo"`
	ShippingDetails *OrderLineItemShippingDetails `json:"shippingDetails"`
}
