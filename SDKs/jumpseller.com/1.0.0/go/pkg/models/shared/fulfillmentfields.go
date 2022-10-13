package shared

type FulfillmentFields struct {
	ExternalID      *string `json:"external_id"`
	ID              *int32  `json:"id"`
	OrderID         *string `json:"order_id"`
	ServiceType     *string `json:"service_type"`
	ShipmentStatus  *string `json:"shipment_status"`
	TrackingCompany *string `json:"tracking_company"`
	TrackingNumber  *string `json:"tracking_number"`
	Type            *string `json:"type"`
}
