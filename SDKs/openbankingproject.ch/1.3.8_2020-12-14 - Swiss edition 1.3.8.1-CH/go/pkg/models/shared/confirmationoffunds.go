package shared

type ConfirmationOfFunds struct {
	Account          AccountReference16Ch `json:"account"`
	CardNumber       *string              `json:"cardNumber"`
	InstructedAmount Amount               `json:"instructedAmount"`
	Payee            *string              `json:"payee"`
}
