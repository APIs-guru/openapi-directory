package shared

type UnitInvoice struct {
	AdditionalCharges []UnitInvoiceAdditionalCharge `json:"additionalCharges"`
	UnitPrice         *Price                        `json:"unitPrice"`
	UnitPriceTaxes    []UnitInvoiceTaxLine          `json:"unitPriceTaxes"`
}
