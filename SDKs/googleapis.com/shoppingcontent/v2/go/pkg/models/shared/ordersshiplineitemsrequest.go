package shared

type OrdersShipLineItemsRequest struct {
	Carrier         *string                                                  `json:"carrier"`
	LineItems       []OrderShipmentLineItemShipment                          `json:"lineItems"`
	OperationID     *string                                                  `json:"operationId"`
	ShipmentGroupID *string                                                  `json:"shipmentGroupId"`
	ShipmentID      *string                                                  `json:"shipmentId"`
	ShipmentInfos   []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos"`
	TrackingID      *string                                                  `json:"trackingId"`
}
