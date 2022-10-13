package shared

type OrderShipment struct {
	Carrier                  *string                                `json:"carrier"`
	CreationDate             *string                                `json:"creationDate"`
	DeliveryDate             *string                                `json:"deliveryDate"`
	ID                       *string                                `json:"id"`
	LineItems                []OrderShipmentLineItemShipment        `json:"lineItems"`
	ScheduledDeliveryDetails *OrderShipmentScheduledDeliveryDetails `json:"scheduledDeliveryDetails"`
	Status                   *string                                `json:"status"`
	TrackingID               *string                                `json:"trackingId"`
}
