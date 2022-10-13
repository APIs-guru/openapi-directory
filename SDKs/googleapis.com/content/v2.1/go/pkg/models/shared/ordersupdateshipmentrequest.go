package shared

type OrdersUpdateShipmentRequest struct {
	Carrier                  *string                                                              `json:"carrier"`
	DeliveryDate             *string                                                              `json:"deliveryDate"`
	LastPickupDate           *string                                                              `json:"lastPickupDate"`
	OperationID              *string                                                              `json:"operationId"`
	ReadyPickupDate          *string                                                              `json:"readyPickupDate"`
	ScheduledDeliveryDetails *OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails `json:"scheduledDeliveryDetails"`
	ShipmentID               *string                                                              `json:"shipmentId"`
	Status                   *string                                                              `json:"status"`
	TrackingID               *string                                                              `json:"trackingId"`
	UndeliveredDate          *string                                                              `json:"undeliveredDate"`
}
