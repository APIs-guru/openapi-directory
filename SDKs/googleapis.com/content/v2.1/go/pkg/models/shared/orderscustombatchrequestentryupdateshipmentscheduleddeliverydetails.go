package shared

// OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails
// ScheduledDeliveryDetails used to update the scheduled delivery order.
type OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails struct {
	CarrierPhoneNumber *string `json:"carrierPhoneNumber,omitempty"`
	ScheduledDate      *string `json:"scheduledDate,omitempty"`
}
