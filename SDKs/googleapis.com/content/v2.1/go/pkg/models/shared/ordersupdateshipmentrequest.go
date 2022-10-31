package shared

type OrdersUpdateShipmentRequest struct {
	Carrier                  *string                                                              `json:"carrier,omitempty"`
	DeliveryDate             *string                                                              `json:"deliveryDate,omitempty"`
	LastPickupDate           *string                                                              `json:"lastPickupDate,omitempty"`
	OperationID              *string                                                              `json:"operationId,omitempty"`
	ReadyPickupDate          *string                                                              `json:"readyPickupDate,omitempty"`
	ScheduledDeliveryDetails *OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails `json:"scheduledDeliveryDetails,omitempty"`
	ShipmentID               *string                                                              `json:"shipmentId,omitempty"`
	Status                   *string                                                              `json:"status,omitempty"`
	TrackingID               *string                                                              `json:"trackingId,omitempty"`
	UndeliveredDate          *string                                                              `json:"undeliveredDate,omitempty"`
}
