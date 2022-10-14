package shared

type OrdersCustomBatchRequestEntryShipLineItems struct {
	Carrier         *string                                                  `json:"carrier,omitempty"`
	LineItems       []OrderShipmentLineItemShipment                          `json:"lineItems,omitempty"`
	ShipmentGroupID *string                                                  `json:"shipmentGroupId,omitempty"`
	ShipmentID      *string                                                  `json:"shipmentId,omitempty"`
	ShipmentInfos   []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos,omitempty"`
	TrackingID      *string                                                  `json:"trackingId,omitempty"`
}
