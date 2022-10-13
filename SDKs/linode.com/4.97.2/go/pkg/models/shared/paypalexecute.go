package shared

type PayPalExecute struct {
	PayerID   string `json:"payer_id"`
	PaymentID string `json:"payment_id"`
}
