package shared

type Installment struct {
	Amount *Price  `json:"amount,omitempty"`
	Months *string `json:"months,omitempty"`
}
