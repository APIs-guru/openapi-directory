package shared

type Installment struct {
	Amount *Price  `json:"amount"`
	Months *string `json:"months"`
}
