package shared



type FulfillmentFields struct {
    ExternalID *string `json:"external_id,omitempty"`
    ID *int32 `json:"id,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    ServiceType *string `json:"service_type,omitempty"`
    ShipmentStatus *string `json:"shipment_status,omitempty"`
    TrackingCompany *string `json:"tracking_company,omitempty"`
    TrackingNumber *string `json:"tracking_number,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

