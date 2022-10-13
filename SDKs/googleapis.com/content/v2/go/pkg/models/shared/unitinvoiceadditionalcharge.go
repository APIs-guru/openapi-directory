package shared

type UnitInvoiceAdditionalCharge struct {
	AdditionalChargeAmount     *Amount     `json:"additionalChargeAmount"`
	AdditionalChargePromotions []Promotion `json:"additionalChargePromotions"`
	Type                       *string     `json:"type"`
}
