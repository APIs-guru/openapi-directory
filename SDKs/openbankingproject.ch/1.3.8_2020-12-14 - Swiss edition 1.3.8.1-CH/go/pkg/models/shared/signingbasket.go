package shared

type SigningBasket struct {
	ConsentIds []string `json:"consentIds"`
	PaymentIds []string `json:"paymentIds"`
}
