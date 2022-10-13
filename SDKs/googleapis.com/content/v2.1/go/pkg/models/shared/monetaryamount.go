package shared

type MonetaryAmount struct {
	PriceAmount *Price `json:"priceAmount"`
	TaxAmount   *Price `json:"taxAmount"`
}
