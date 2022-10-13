package shared

type OrdersCustomBatchRequestEntryUpdateShipment struct {
	Carrier      *string `json:"carrier"`
	DeliveryDate *string `json:"deliveryDate"`
	ShipmentID   *string `json:"shipmentId"`
	Status       *string `json:"status"`
	TrackingID   *string `json:"trackingId"`
}
