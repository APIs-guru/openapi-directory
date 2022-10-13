package shared

type OrderTrackingSignalShipmentLineItemMapping struct {
	LineItemID *string `json:"lineItemId"`
	Quantity   *string `json:"quantity"`
	ShipmentID *string `json:"shipmentId"`
}
