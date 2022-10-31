package shared



type UnitInvoice struct {
    AdditionalCharges []UnitInvoiceAdditionalCharge `json:"additionalCharges,omitempty"`
    UnitPrice *Price `json:"unitPrice,omitempty"`
    UnitPriceTaxes []UnitInvoiceTaxLine `json:"unitPriceTaxes,omitempty"`
    
}

