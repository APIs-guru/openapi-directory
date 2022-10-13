package shared

type UnitInvoice struct {
	AdditionalCharges []UnitInvoiceAdditionalCharge `json:"additionalCharges"`
	Promotions        []Promotion                   `json:"promotions"`
	UnitPricePretax   *Price                        `json:"unitPricePretax"`
	UnitPriceTaxes    []UnitInvoiceTaxLine          `json:"unitPriceTaxes"`
}
