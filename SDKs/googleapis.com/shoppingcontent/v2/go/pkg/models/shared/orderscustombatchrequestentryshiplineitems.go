package shared

type OrdersCustomBatchRequestEntryShipLineItems struct {
	Carrier         *string                                                  `json:"carrier"`
	LineItems       []OrderShipmentLineItemShipment                          `json:"lineItems"`
	ShipmentGroupID *string                                                  `json:"shipmentGroupId"`
	ShipmentID      *string                                                  `json:"shipmentId"`
	ShipmentInfos   []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos"`
	TrackingID      *string                                                  `json:"trackingId"`
}
