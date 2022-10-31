package shared



type OrdersUpdateShipmentRequest struct {
    Carrier *string `json:"carrier,omitempty"`
    DeliveryDate *string `json:"deliveryDate,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    ShipmentID *string `json:"shipmentId,omitempty"`
    Status *string `json:"status,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

