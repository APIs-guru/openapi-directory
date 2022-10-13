package shared

type Amount struct {
	PriceAmount *Price `json:"priceAmount"`
	TaxAmount   *Price `json:"taxAmount"`
}
