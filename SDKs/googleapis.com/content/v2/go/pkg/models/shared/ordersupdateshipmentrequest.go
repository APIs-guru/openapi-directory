package shared

type OrdersUpdateShipmentRequest struct {
	Carrier      *string `json:"carrier"`
	DeliveryDate *string `json:"deliveryDate"`
	OperationID  *string `json:"operationId"`
	ShipmentID   *string `json:"shipmentId"`
	Status       *string `json:"status"`
	TrackingID   *string `json:"trackingId"`
}
