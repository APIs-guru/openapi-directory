package shared

type UnitInvoiceTaxLine struct {
	TaxAmount *Price  `json:"taxAmount,omitempty"`
	TaxName   *string `json:"taxName,omitempty"`
	TaxType   *string `json:"taxType,omitempty"`
}
