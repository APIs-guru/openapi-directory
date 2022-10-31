package shared

type UnitInvoice struct {
	AdditionalCharges []UnitInvoiceAdditionalCharge `json:"additionalCharges,omitempty"`
	Promotions        []Promotion                   `json:"promotions,omitempty"`
	UnitPricePretax   *Price                        `json:"unitPricePretax,omitempty"`
	UnitPriceTaxes    []UnitInvoiceTaxLine          `json:"unitPriceTaxes,omitempty"`
}
