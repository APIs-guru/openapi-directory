package shared

type OrdersShipLineItemsRequest struct {
	LineItems       []OrderShipmentLineItemShipment                          `json:"lineItems,omitempty"`
	OperationID     *string                                                  `json:"operationId,omitempty"`
	ShipmentGroupID *string                                                  `json:"shipmentGroupId,omitempty"`
	ShipmentInfos   []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos,omitempty"`
}
