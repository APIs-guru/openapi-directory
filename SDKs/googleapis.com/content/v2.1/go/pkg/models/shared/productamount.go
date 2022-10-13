package shared

type ProductAmount struct {
	PriceAmount       *Price `json:"priceAmount"`
	RemittedTaxAmount *Price `json:"remittedTaxAmount"`
	TaxAmount         *Price `json:"taxAmount"`
}
