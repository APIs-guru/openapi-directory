package shared

type OrderLineItemShippingDetails struct {
	DeliverByDate          *string                             `json:"deliverByDate"`
	Method                 *OrderLineItemShippingDetailsMethod `json:"method"`
	PickupPromiseInMinutes *int64                              `json:"pickupPromiseInMinutes"`
	ShipByDate             *string                             `json:"shipByDate"`
	Type                   *string                             `json:"type"`
}
