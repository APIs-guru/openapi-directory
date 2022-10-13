package shared

type OrdersShipLineItemsRequest struct {
	LineItems       []OrderShipmentLineItemShipment                          `json:"lineItems"`
	OperationID     *string                                                  `json:"operationId"`
	ShipmentGroupID *string                                                  `json:"shipmentGroupId"`
	ShipmentInfos   []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos"`
}
