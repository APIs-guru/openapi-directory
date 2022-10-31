package shared



type OrdersShipLineItemsRequest struct {
    Carrier *string `json:"carrier,omitempty"`
    LineItems []OrderShipmentLineItemShipment `json:"lineItems,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    ShipmentGroupID *string `json:"shipmentGroupId,omitempty"`
    ShipmentID *string `json:"shipmentId,omitempty"`
    ShipmentInfos []OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo `json:"shipmentInfos,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

