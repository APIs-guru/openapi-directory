package shared

type PaymentRequest struct {
	Cvv *string `json:"cvv,omitempty"`
	Usd string  `json:"usd"`
}
