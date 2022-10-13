package shared

type OrderLineItemProductFee struct {
	Amount *Price  `json:"amount"`
	Name   *string `json:"name"`
}
