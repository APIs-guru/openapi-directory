package shared

type OrderreturnsPartialRefund struct {
	PriceAmount *Price `json:"priceAmount"`
	TaxAmount   *Price `json:"taxAmount"`
}
