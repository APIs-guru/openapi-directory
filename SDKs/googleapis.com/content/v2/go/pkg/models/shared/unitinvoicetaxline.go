package shared

type UnitInvoiceTaxLine struct {
	TaxAmount *Price  `json:"taxAmount"`
	TaxName   *string `json:"taxName"`
	TaxType   *string `json:"taxType"`
}
