package shared

type OrderTrackingSignalShipmentLineItemMapping struct {
	LineItemID *string `json:"lineItemId,omitempty"`
	Quantity   *string `json:"quantity,omitempty"`
	ShipmentID *string `json:"shipmentId,omitempty"`
}
