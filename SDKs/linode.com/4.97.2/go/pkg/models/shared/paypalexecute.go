package shared

// PayPalExecute
// An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
type PayPalExecute struct {
	PayerID   string `json:"payer_id"`
	PaymentID string `json:"payment_id"`
}
