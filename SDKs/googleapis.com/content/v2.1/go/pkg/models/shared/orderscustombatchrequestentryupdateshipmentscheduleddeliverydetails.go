package shared

type OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails struct {
	CarrierPhoneNumber *string `json:"carrierPhoneNumber,omitempty"`
	ScheduledDate      *string `json:"scheduledDate,omitempty"`
}
