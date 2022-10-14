package shared

type UnitInvoiceAdditionalCharge struct {
	AdditionalChargeAmount     *Amount     `json:"additionalChargeAmount,omitempty"`
	AdditionalChargePromotions []Promotion `json:"additionalChargePromotions,omitempty"`
	Type                       *string     `json:"type,omitempty"`
}
