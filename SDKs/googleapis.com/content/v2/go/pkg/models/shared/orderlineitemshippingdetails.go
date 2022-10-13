package shared

type OrderLineItemShippingDetails struct {
	DeliverByDate *string                             `json:"deliverByDate"`
	Method        *OrderLineItemShippingDetailsMethod `json:"method"`
	ShipByDate    *string                             `json:"shipByDate"`
	Type          *string                             `json:"type"`
}
