package shared

type ReturnShipment struct {
	CreationDate          *string                `json:"creationDate,omitempty"`
	DeliveryDate          *string                `json:"deliveryDate,omitempty"`
	ReturnMethodType      *string                `json:"returnMethodType,omitempty"`
	ShipmentID            *string                `json:"shipmentId,omitempty"`
	ShipmentTrackingInfos []ShipmentTrackingInfo `json:"shipmentTrackingInfos,omitempty"`
	ShippingDate          *string                `json:"shippingDate,omitempty"`
	State                 *string                `json:"state,omitempty"`
}
