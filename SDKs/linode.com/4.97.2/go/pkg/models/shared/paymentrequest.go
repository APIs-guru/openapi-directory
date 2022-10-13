package shared

type PaymentRequest struct {
	Cvv *string `json:"cvv"`
	Usd string  `json:"usd"`
}
