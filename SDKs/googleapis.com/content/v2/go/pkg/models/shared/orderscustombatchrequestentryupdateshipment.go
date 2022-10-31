package shared



type OrdersCustomBatchRequestEntryUpdateShipment struct {
    Carrier *string `json:"carrier,omitempty"`
    DeliveryDate *string `json:"deliveryDate,omitempty"`
    ShipmentID *string `json:"shipmentId,omitempty"`
    Status *string `json:"status,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

