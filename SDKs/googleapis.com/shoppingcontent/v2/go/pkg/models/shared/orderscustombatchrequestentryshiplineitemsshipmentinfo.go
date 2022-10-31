package shared



type OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo struct {
    Carrier *string `json:"carrier,omitempty"`
    ShipmentID *string `json:"shipmentId,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

