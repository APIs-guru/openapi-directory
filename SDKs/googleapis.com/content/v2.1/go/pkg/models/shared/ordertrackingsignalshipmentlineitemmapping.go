package shared

// OrderTrackingSignalShipmentLineItemMapping
// Represents how many items are in the shipment for the given shipment_id and line_item_id.
type OrderTrackingSignalShipmentLineItemMapping struct {
	LineItemID *string `json:"lineItemId,omitempty"`
	Quantity   *string `json:"quantity,omitempty"`
	ShipmentID *string `json:"shipmentId,omitempty"`
}
