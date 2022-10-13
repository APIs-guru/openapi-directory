package shared

type UnitInvoiceAdditionalCharge struct {
	AdditionalChargeAmount *Amount `json:"additionalChargeAmount"`
	Type                   *string `json:"type"`
}
