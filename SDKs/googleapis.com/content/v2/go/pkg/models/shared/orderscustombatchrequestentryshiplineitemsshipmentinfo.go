package shared

type OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo struct {
	Carrier    *string `json:"carrier"`
	ShipmentID *string `json:"shipmentId"`
	TrackingID *string `json:"trackingId"`
}
