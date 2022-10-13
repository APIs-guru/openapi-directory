package shared

type ReturnShipment struct {
	CreationDate          *string                `json:"creationDate"`
	DeliveryDate          *string                `json:"deliveryDate"`
	ReturnMethodType      *string                `json:"returnMethodType"`
	ShipmentID            *string                `json:"shipmentId"`
	ShipmentTrackingInfos []ShipmentTrackingInfo `json:"shipmentTrackingInfos"`
	ShippingDate          *string                `json:"shippingDate"`
	State                 *string                `json:"state"`
}
