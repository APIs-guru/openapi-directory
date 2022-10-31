package shared



type OrderShipment struct {
    Carrier *string `json:"carrier,omitempty"`
    CreationDate *string `json:"creationDate,omitempty"`
    DeliveryDate *string `json:"deliveryDate,omitempty"`
    ID *string `json:"id,omitempty"`
    LineItems []OrderShipmentLineItemShipment `json:"lineItems,omitempty"`
    ScheduledDeliveryDetails *OrderShipmentScheduledDeliveryDetails `json:"scheduledDeliveryDetails,omitempty"`
    ShipmentGroupID *string `json:"shipmentGroupId,omitempty"`
    Status *string `json:"status,omitempty"`
    TrackingID *string `json:"trackingId,omitempty"`
    
}

